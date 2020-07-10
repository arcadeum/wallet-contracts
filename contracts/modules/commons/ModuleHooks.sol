pragma solidity 0.5.16;

import "./interfaces/IModuleHooks.sol";

import "./ModuleSelfAuth.sol";
import "./ModuleStorage.sol";
import "./ModuleERC165.sol";

import "../../interfaces/receivers/IERC1155Receiver.sol";
import "../../interfaces/receivers/IERC721Receiver.sol";
import "../../interfaces/receivers/IERC223Receiver.sol";


contract ModuleHooks is IERC1155Receiver, IERC721Receiver, IModuleHooks, ModuleERC165, ModuleSelfAuth {
  //                       HOOKS_KEY = keccak256("org.arcadeum.module.hooks.hooks");
  bytes32 private constant HOOKS_KEY = bytes32(0xbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a120);

  /**
   * @notice Reads the implementation hook of a signature
   * @param _signature Signature function
   * @return The address of the implementation hook, address(0) if none
  */
  function readHook(bytes4 _signature) external view returns (address) {
    return _readHook(_signature);
  }

  /**
   * @notice Adds a new hook to handle a given function selector
   * @param _signature Signature function linked to the hook
   * @param _implementation Hook implementation contract
   * @dev Can't overwrite hooks that are part of the mainmodule (those defined below)
   */
  function addHook(bytes4 _signature, address _implementation) external onlySelf {
    require(_readHook(_signature) == address(0), "ModuleHooks#addHook: HOOK_ALREADY_REGISTERED");
    _writeHook(_signature, _implementation);
  }

  /**
   * @notice Removes a registered hook
   * @param _signature Signature function linked to the hook
   * @dev Can't remove hooks that are part of the mainmodule (those defined below)
   *      without upgrading the wallet
   */
  function removeHook(bytes4 _signature) external onlySelf {
    require(_readHook(_signature) != address(0), "ModuleHooks#removeHook: HOOK_NOT_REGISTERED");
    _writeHook(_signature, address(0));
  }

  /**
   * @notice Reads the implementation hook of a signature
   * @param _signature Signature function
   * @return The address of the implementation hook, address(0) if none
  */
  function _readHook(bytes4 _signature) private view returns (address) {
    return address(uint256(ModuleStorage.readBytes32Map(HOOKS_KEY, _signature)));
  }

  /**
   * @notice Writes the implementation hook of a signature
   * @param _signature Signature function
   * @param _implementation Hook implementation contract
  */
  function _writeHook(bytes4 _signature, address _implementation) private {
    ModuleStorage.writeBytes32Map(HOOKS_KEY, _signature, bytes32(uint256(_implementation)));
  }

  /**
   * @notice Handle the receipt of a single ERC1155 token type.
   * @return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
   */
  function onERC1155Received(
    address,
    address,
    uint256,
    uint256,
    bytes calldata
  ) external returns (bytes4) {
    return this.onERC1155Received.selector;
  }

  /**
   * @notice Handle the receipt of multiple ERC1155 token types.
   * @return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`
   */
  function onERC1155BatchReceived(
    address,
    address,
    uint256[] calldata,
    uint256[] calldata,
    bytes calldata
  ) external returns (bytes4) {
    return this.onERC1155BatchReceived.selector;
  }

  /**
   * @notice Handle the receipt of a single ERC721 token.
   * @return `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
   */
  function onERC721Received(address, address, uint256, bytes calldata) external returns (bytes4) {
    return this.onERC721Received.selector;
  }

  /**
   * @notice Routes fallback calls through hooks
   */
  function() external payable {
    address target = _readHook(msg.sig);
    if (target != address(0)) {
      (bool success, bytes memory result) = target.delegatecall(msg.data);
      assembly {
        if iszero(success)  {
          revert(add(result, 0x20), mload(result))
        }

        return(add(result, 0x20), mload(result))
      }
    }
  }
}
