pragma solidity 0.5.16;

interface IERC223Receiver {
  function tokenFallback(address, uint256, bytes calldata) external;
}
