pragma solidity 0.5.16;


contract ModuleMock {
  event Pong();

  function ping() external {
    emit Pong();
  }
}
