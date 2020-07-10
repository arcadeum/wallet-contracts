pragma solidity 0.5.16;

import "../utils/LibBytes.sol";


contract LibBytesImpl {
  using LibBytes for bytes;

  function popLastByte(bytes memory _data) public pure returns (bytes memory, bytes1) {
    bytes1 by = _data.popLastByte();
    return (_data, by);
  }

  function readFirstUint16(bytes calldata _data) external pure returns (uint16, uint256) {
    return _data.readFirstUint16();
  }

  function readUint8Uint8(bytes calldata _data, uint256 _index) external pure returns (uint8, uint8, uint256) {
    return _data.readUint8Uint8(_index);
  }

  function readAddress(bytes calldata _data, uint256 _index) external pure returns (address, uint256) {
    return _data.readAddress(_index);
  }

  function readBytes66(bytes calldata _data, uint256 _index) external pure returns (bytes memory, uint256) {
    return _data.readBytes66(_index);
  }

  function readBytes32(bytes calldata _data, uint256 _index) external pure returns (bytes32) {
    return _data.readBytes32(_index);
  }
}
