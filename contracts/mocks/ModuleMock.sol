pragma solidity ^0.6.9;


contract ModuleMock {
  event Pong();

  function ping() external {
    emit Pong();
  }
}
