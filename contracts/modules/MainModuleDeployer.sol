pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

import "./MainModule.sol";

contract MainModuleDeployer {
  event Deployed(address _module, bytes32 _initCodeHash);

  bytes public constant WALLET_CODE = hex"603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";
  bytes public MAIN_MODULE_CREATION_CODE;

  function deploy(address _factory) external {
    address module;

    // Calculate address of next deployed contract - keccak256(rlp([sender, nonce]))[12:]
    address dest = address(uint256(keccak256(abi.encodePacked(byte(0xd6), byte(0x94), address(this), byte(0x01)))));

    // Build init code hash of the deployed wallets using that module
    bytes32 initCodeHash = keccak256(abi.encodePacked(WALLET_CODE, uint256(dest)));

    // Define placeholders
    bytes32 initCodeHashPlaceholder = keccak256("placeholder-init-code-hash");
    address factoryPlaceholder = address(uint256(keccak256("placeholder-factory")));

    // Load MainModule init code
    bytes memory code = type(MainModule).creationCode;

    // Deploy `MainModule.sol` replacing placeholders by their final values
    // solium-disable-next-line security/no-inline-assembly
    assembly {
      let poi := add(code, 0x20)
      let end := add(poi, add(mload(code), 0x0c))

      factoryPlaceholder := shr(0x60, shl(0x60, factoryPlaceholder))

      for { } lt(poi, end) { poi := add(poi, 0x01) } {
        let word := mload(poi)

        if eq(word, initCodeHashPlaceholder) {
          mstore(poi, initCodeHash)
        }

        if eq(shr(0x60, word), factoryPlaceholder) {
          mstore(poi, or(shl(0x60, _factory), shr(0xa0, shl(0xa0, word))))
        }
      }

      module := create(0, add(code, 0x20), mload(code))
    }

    emit Deployed(module, initCodeHash);
    selfdestruct(msg.sender);
  }
}