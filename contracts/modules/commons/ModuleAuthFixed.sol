pragma solidity 0.5.16;

import "./ModuleAuth.sol";
import "../../Wallet.sol";

/**
 *  Implements ModuleAuth by validating the signature image against
 *  the salt used to deploy the contract
 *
 *  This module allows wallets to be deployed with a default configuration
 *  without using any aditional contract storage
 */
contract ModuleAuthFixed is ModuleAuth {
  bytes32 public INIT_CODE_HASH;
  address public FACTORY;

  constructor(address _factory) public {
    // Build init code hash of the deployed wallets using that module
    bytes32 initCodeHash = keccak256(abi.encodePacked(type(Wallet).creationCode, uint256(address(this))));

    INIT_CODE_HASH = initCodeHash;
    FACTORY = _factory;
  }

  /**
   * @notice Validates the signature image with the salt used to deploy the contract
   * @param _imageHash Hash image of signature
   * @return true if the signature image is valid
   */
  function _isValidImage(bytes32 _imageHash) internal view returns (bool) {
    return address(
      uint256(
        keccak256(
          abi.encodePacked(
            byte(0xff),
            FACTORY,
            _imageHash,
            INIT_CODE_HASH
          )
        )
      )
    ) == address(this);
  }
}
