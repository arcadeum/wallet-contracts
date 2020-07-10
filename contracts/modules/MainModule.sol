pragma solidity 0.5.16;
pragma experimental ABIEncoderV2;

import "../utils/SignatureValidator.sol";

import "./commons/Implementation.sol";
import "./commons/ModuleAuthFixed.sol";
import "./commons/ModuleHooks.sol";
import "./commons/ModuleCalls.sol";
import "./commons/ModuleUpdate.sol";
import "./commons/ModuleCreator.sol";

import "../interfaces/receivers/IERC1155Receiver.sol";
import "../interfaces/receivers/IERC721Receiver.sol";

import "../interfaces/IERC1271Wallet.sol";


/**
 * @notice Contains the core functionality arcadeum wallets will inherit.
 * @dev If using a new main module, developpers must ensure that all inherited
 *      contracts by the mainmodule don't conflict and are accounted for to be
 *      supported by the supportsInterface method.
 */
contract MainModule is
  ModuleAuthFixed,
  ModuleCalls,
  ModuleUpdate,
  ModuleHooks,
  ModuleCreator
{
  constructor(
    address _factory
  ) public ModuleAuthFixed(
    _factory
  ) { }
}
