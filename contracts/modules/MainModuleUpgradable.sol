pragma solidity 0.5.16;
pragma experimental ABIEncoderV2;

import "./commons/ModuleAuthUpgradable.sol";
import "./commons/ModuleHooks.sol";
import "./commons/ModuleCalls.sol";
import "./commons/ModuleUpdate.sol";
import "./commons/ModuleCreator.sol";


/**
 * @notice Contains the core functionality arcadeum wallets will inherit with
 *         the added functionality that the main-module can be changed.
 * @dev If using a new main module, developpers must ensure that all inherited
 *      contracts by the mainmodule don't conflict and are accounted for to be
 *      supported by the supportsInterface method.
 */
contract MainModuleUpgradable is
  ModuleAuthUpgradable,
  ModuleCalls,
  ModuleUpdate,
  ModuleHooks,
  ModuleCreator
{

}
