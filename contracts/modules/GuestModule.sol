pragma solidity 0.5.16;
pragma experimental ABIEncoderV2;

import "../utils/SignatureValidator.sol";

import "./commons/Implementation.sol";
import "./commons/ModuleAuth.sol";
import "./commons/ModuleHooks.sol";
import "./commons/ModuleCalls.sol";
import "./commons/ModuleUpdate.sol";
import "./commons/ModuleCreator.sol";

import "../interfaces/receivers/IERC1155Receiver.sol";
import "../interfaces/receivers/IERC721Receiver.sol";

import "../interfaces/IERC1271Wallet.sol";


/**
 * GuestModule implements an Arcadeum wallet without signatures, nonce or replay protection.
 * executing transactions using this wallet is not an authenticated process, and can be done by any address.
 *
 * @notice This contract is completely public with no security, designed to execute pre-signed transactions
 *   and use Arcadeum tools without using the wallets.
 */
contract GuestModule is
  ModuleAuth,
  ModuleCalls,
  ModuleCreator
{
  /**
   * @notice Allow any caller to execute an action
   * @param _txs Transactions to process
   */
  function execute(
    Transaction[] memory _txs,
    uint256,
    bytes memory
  ) public {
    // Hash transaction bundle
    bytes32 txHash = _hashData(abi.encode('guest:', _txs));

    // Execute the transactions
    _executeGuest(txHash, _txs);
  }

  /**
   * @notice Allow any caller to execute an action
   * @param _txs Transactions to process
   */
  function selfExecute(
    Transaction[] memory _txs
  ) public {
    // Hash transaction bundle
    bytes32 txHash = _hashData(abi.encode('self:', _txs));

    // Execute the transactions
    _executeGuest(txHash, _txs);
  }

  /**
   * @notice Executes a list of transactions
   * @param _txHash  Hash of the batch of transactions
   * @param _txs  Transactions to execute
   */
  function _executeGuest(
    bytes32 _txHash,
    Transaction[] memory _txs
  ) private {
    // Execute transaction
    for (uint256 i = 0; i < _txs.length; i++) {
      Transaction memory transaction = _txs[i];

      bool success;
      bytes memory result;

      require(!transaction.delegateCall, "GuestModule#_executeGuest: delegateCall not allowed");
      (success, result) = transaction.target.call.value(transaction.value).gas(transaction.gasLimit)(transaction.data);
  
      if (success) {
        emit TxExecuted(_txHash);
      } else {
        _revertBytes(transaction, _txHash, result);
      }
    }
  }

  /**
   * @notice Validates any signature image, because the wallet is public and has now owner.
   * @return true, all signatures are valid.
   */
  function _isValidImage(bytes32) internal view returns (bool) {
    return true;
  }
}
