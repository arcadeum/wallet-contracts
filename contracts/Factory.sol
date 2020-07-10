pragma solidity 0.5.16;
import "./Wallet.sol";


contract Factory {
  bytes internal constant WALLET_CODE = hex"603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";

  event Deployed(address wallet);

  /**
   * @notice Will deploy a new wallet instance
   * @param _mainModule Address of the main module to be used by the wallet
   * @param _salt Salt used to generate the wallet, which is the imageHash
   *       of the wallet's configuration.
   * @dev It is recommended to not have more than 200 signers as opcode repricing
   *      could make transactions impossible to execute as all the signers must be
   *      passed for each transaction.
   */
  function deploy(address _mainModule, bytes32 _salt) public payable returns (address _contract) {
    bytes memory code = abi.encodePacked(WALLET_CODE, uint256(_mainModule));
    assembly { _contract := create2(callvalue(), add(code, 32), mload(code), _salt) }
    emit Deployed(_contract);
  }
}
