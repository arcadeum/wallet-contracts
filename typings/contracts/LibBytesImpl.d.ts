/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface LibBytesImplInterface extends ethers.utils.Interface {
  functions: {
    "readAddress(bytes,uint256)": FunctionFragment;
    "readBytes(bytes,uint256,uint256)": FunctionFragment;
    "readBytes32(bytes,uint256)": FunctionFragment;
    "readBytes66(bytes,uint256)": FunctionFragment;
    "readFirstUint16(bytes)": FunctionFragment;
    "readUint16(bytes,uint256)": FunctionFragment;
    "readUint8Uint8(bytes,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "readAddress",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "readBytes",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "readBytes32",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "readBytes66",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "readFirstUint16",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "readUint16",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "readUint8Uint8",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "readAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "readBytes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readBytes32",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readBytes66",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readFirstUint16",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "readUint16", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readUint8Uint8",
    data: BytesLike
  ): Result;

  events: {};
}

export class LibBytesImpl extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LibBytesImplInterface;

  functions: {
    readAddress(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "readAddress(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    readBytes(
      _data: BytesLike,
      _index: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "readBytes(bytes,uint256,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    readBytes32(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "readBytes32(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    readBytes66(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "readBytes66(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    readFirstUint16(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber]>;

    "readFirstUint16(bytes)"(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber]>;

    readUint16(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber]>;

    "readUint16(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber]>;

    readUint8Uint8(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number, BigNumber]>;

    "readUint8Uint8(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number, BigNumber]>;
  };

  readAddress(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  "readAddress(bytes,uint256)"(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  readBytes(
    _data: BytesLike,
    _index: BigNumberish,
    _size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  "readBytes(bytes,uint256,uint256)"(
    _data: BytesLike,
    _index: BigNumberish,
    _size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  readBytes32(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "readBytes32(bytes,uint256)"(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  readBytes66(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  "readBytes66(bytes,uint256)"(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  readFirstUint16(
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber]>;

  "readFirstUint16(bytes)"(
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber]>;

  readUint16(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber]>;

  "readUint16(bytes,uint256)"(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber]>;

  readUint8Uint8(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, number, BigNumber]>;

  "readUint8Uint8(bytes,uint256)"(
    _data: BytesLike,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, number, BigNumber]>;

  callStatic: {
    readAddress(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "readAddress(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    readBytes(
      _data: BytesLike,
      _index: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "readBytes(bytes,uint256,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    readBytes32(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "readBytes32(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    readBytes66(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "readBytes66(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    readFirstUint16(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber]>;

    "readFirstUint16(bytes)"(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber]>;

    readUint16(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber]>;

    "readUint16(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber]>;

    readUint8Uint8(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number, BigNumber]>;

    "readUint8Uint8(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    readAddress(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readAddress(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readBytes(
      _data: BytesLike,
      _index: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readBytes(bytes,uint256,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readBytes32(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readBytes32(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readBytes66(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readBytes66(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readFirstUint16(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readFirstUint16(bytes)"(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readUint16(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readUint16(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readUint8Uint8(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readUint8Uint8(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    readAddress(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readAddress(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readBytes(
      _data: BytesLike,
      _index: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readBytes(bytes,uint256,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readBytes32(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readBytes32(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readBytes66(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readBytes66(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readFirstUint16(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readFirstUint16(bytes)"(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readUint16(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readUint16(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readUint8Uint8(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readUint8Uint8(bytes,uint256)"(
      _data: BytesLike,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
