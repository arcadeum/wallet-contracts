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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IModuleHooksInterface extends ethers.utils.Interface {
  functions: {
    "addHook(bytes4,address)": FunctionFragment;
    "readHook(bytes4)": FunctionFragment;
    "removeHook(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addHook",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "readHook", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "removeHook",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "addHook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readHook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeHook", data: BytesLike): Result;

  events: {};
}

export class IModuleHooks extends Contract {
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

  interface: IModuleHooksInterface;

  functions: {
    addHook(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addHook(bytes4,address)"(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    readHook(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "readHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    removeHook(
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeHook(bytes4)"(
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addHook(
    _signature: BytesLike,
    _implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addHook(bytes4,address)"(
    _signature: BytesLike,
    _implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  readHook(_signature: BytesLike, overrides?: CallOverrides): Promise<string>;

  "readHook(bytes4)"(
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  removeHook(
    _signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeHook(bytes4)"(
    _signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addHook(
      _signature: BytesLike,
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addHook(bytes4,address)"(
      _signature: BytesLike,
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    readHook(_signature: BytesLike, overrides?: CallOverrides): Promise<string>;

    "readHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    removeHook(_signature: BytesLike, overrides?: CallOverrides): Promise<void>;

    "removeHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addHook(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addHook(bytes4,address)"(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    readHook(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeHook(
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeHook(bytes4)"(
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addHook(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addHook(bytes4,address)"(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    readHook(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeHook(
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeHook(bytes4)"(
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
