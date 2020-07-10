pragma solidity 0.5.16;


contract ExpirableUtil {
  function requireNonExpired(uint256 _expiration) external view {
    require(block.timestamp < _expiration, "ExpirableUtil:requireNonExpired: EXPIRED");
  }
}
