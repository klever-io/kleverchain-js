// package: proto
// file: lib/transaction/proto/transaction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class TXContract extends jspb.Message {
  getType(): TXContract.ContractTypeMap[keyof TXContract.ContractTypeMap];
  setType(value: TXContract.ContractTypeMap[keyof TXContract.ContractTypeMap]): void;

  hasParameter(): boolean;
  clearParameter(): void;
  getParameter(): google_protobuf_any_pb.Any | undefined;
  setParameter(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TXContract.AsObject;
  static toObject(includeInstance: boolean, msg: TXContract): TXContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TXContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TXContract;
  static deserializeBinaryFromReader(message: TXContract, reader: jspb.BinaryReader): TXContract;
}

export namespace TXContract {
  export type AsObject = {
    type: TXContract.ContractTypeMap[keyof TXContract.ContractTypeMap],
    parameter?: google_protobuf_any_pb.Any.AsObject,
  }

  export interface ContractTypeMap {
    TRANSFERCONTRACTTYPE: 0;
    CREATEASSETCONTRACTTYPE: 1;
    CREATEVALIDATORCONTRACTTYPE: 2;
    VALIDATORCONFIGCONTRACTTYPE: 3;
    FREEZECONTRACTTYPE: 4;
    UNFREEZECONTRACTTYPE: 5;
    DELEGATECONTRACTTYPE: 6;
    UNDELEGATECONTRACTTYPE: 7;
    WITHDRAWCONTRACTTYPE: 8;
    CLAIMCONTRACTTYPE: 9;
    UNJAILCONTRACTTYPE: 10;
    ASSETTRIGGERCONTRACTTYPE: 11;
    SETACCOUNTNAMECONTRACTTYPE: 12;
    PROPOSALCONTRACTTYPE: 13;
    VOTECONTRACTTYPE: 14;
    CONFIGITOCONTRACTTYPE: 15;
    SETITOPRICESCONTRACTTYPE: 16;
    BUYCONTRACTTYPE: 17;
    SELLCONTRACTTYPE: 18;
    CANCELMARKETORDERCONTRACTTYPE: 19;
    CREATEMARKETPLACECONTRACTTYPE: 20;
    CONFIGMARKETPLACECONTRACTTYPE: 21;
    UPDATEACCOUNTPERMISSIONCONTRACTTYPE: 22;
  }

  export const ContractType: ContractTypeMap;
}

export class Transaction extends jspb.Message {
  hasRawdata(): boolean;
  clearRawdata(): void;
  getRawdata(): Transaction.Raw | undefined;
  setRawdata(value?: Transaction.Raw): void;

  clearSignatureList(): void;
  getSignatureList(): Array<Uint8Array | string>;
  getSignatureList_asU8(): Array<Uint8Array>;
  getSignatureList_asB64(): Array<string>;
  setSignatureList(value: Array<Uint8Array | string>): void;
  addSignature(value: Uint8Array | string, index?: number): Uint8Array | string;

  getResult(): Transaction.TXResultMap[keyof Transaction.TXResultMap];
  setResult(value: Transaction.TXResultMap[keyof Transaction.TXResultMap]): void;

  getResultcode(): Transaction.TXResultCodeMap[keyof Transaction.TXResultCodeMap];
  setResultcode(value: Transaction.TXResultCodeMap[keyof Transaction.TXResultCodeMap]): void;

  clearReceiptsList(): void;
  getReceiptsList(): Array<Transaction.Receipt>;
  setReceiptsList(value: Array<Transaction.Receipt>): void;
  addReceipts(value?: Transaction.Receipt, index?: number): Transaction.Receipt;

  getBlock(): number;
  setBlock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    rawdata?: Transaction.Raw.AsObject,
    signatureList: Array<Uint8Array | string>,
    result: Transaction.TXResultMap[keyof Transaction.TXResultMap],
    resultcode: Transaction.TXResultCodeMap[keyof Transaction.TXResultCodeMap],
    receiptsList: Array<Transaction.Receipt.AsObject>,
    block: number,
  }

  export class Raw extends jspb.Message {
    getNonce(): number;
    setNonce(value: number): void;

    getSender(): Uint8Array | string;
    getSender_asU8(): Uint8Array;
    getSender_asB64(): string;
    setSender(value: Uint8Array | string): void;

    clearContractList(): void;
    getContractList(): Array<TXContract>;
    setContractList(value: Array<TXContract>): void;
    addContract(value?: TXContract, index?: number): TXContract;

    getPermissionid(): number;
    setPermissionid(value: number): void;

    clearDataList(): void;
    getDataList(): Array<Uint8Array | string>;
    getDataList_asU8(): Array<Uint8Array>;
    getDataList_asB64(): Array<string>;
    setDataList(value: Array<Uint8Array | string>): void;
    addData(value: Uint8Array | string, index?: number): Uint8Array | string;

    getKappfee(): number;
    setKappfee(value: number): void;

    getBandwidthfee(): number;
    setBandwidthfee(value: number): void;

    getVersion(): number;
    setVersion(value: number): void;

    getChainid(): Uint8Array | string;
    getChainid_asU8(): Uint8Array;
    getChainid_asB64(): string;
    setChainid(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Raw.AsObject;
    static toObject(includeInstance: boolean, msg: Raw): Raw.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Raw, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Raw;
    static deserializeBinaryFromReader(message: Raw, reader: jspb.BinaryReader): Raw;
  }

  export namespace Raw {
    export type AsObject = {
      nonce: number,
      sender: Uint8Array | string,
      contractList: Array<TXContract.AsObject>,
      permissionid: number,
      dataList: Array<Uint8Array | string>,
      kappfee: number,
      bandwidthfee: number,
      version: number,
      chainid: Uint8Array | string,
    }
  }

  export class Receipt extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<Uint8Array | string>;
    getDataList_asU8(): Array<Uint8Array>;
    getDataList_asB64(): Array<string>;
    setDataList(value: Array<Uint8Array | string>): void;
    addData(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Receipt.AsObject;
    static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Receipt;
    static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
  }

  export namespace Receipt {
    export type AsObject = {
      dataList: Array<Uint8Array | string>,
    }
  }

  export interface TXResultMap {
    SUCCESS: 0;
    FAILED: 1;
  }

  export const TXResult: TXResultMap;

  export interface TXResultCodeMap {
    OK: 0;
    OUTOFFUNDS: 1;
    ACCOUNTERROR: 2;
    ASSETERROR: 3;
    CONTRACTINVALID: 4;
    CONTRACTNOTFOUND: 5;
    FEEINVALID: 6;
    PARAMETERINVALID: 7;
    APRINVALID: 8;
    ASSETIDINVALID: 9;
    ASSETTYPEINVALID: 10;
    ASSETCANTBEMINTED: 11;
    ASSETCANTBEBURNED: 12;
    ASSETCANTBEPAUSED: 13;
    ASSETCANTBEDELEGATED: 14;
    ASSETOWNERCANTBECHANGED: 15;
    ACCOUNTNOTOWNER: 16;
    COMMISSIONTOOHIGH: 17;
    DELEGATIONAMOUNTINVALID: 18;
    PROPOSALNOTACTIVE: 19;
    VALUEINVALID: 20;
    AMOUNTINVALID: 21;
    BUCKETIDINVALID: 22;
    KEYCONFLICT: 23;
    MAXDELEGATIONAMOUNT: 24;
    INVALIDPEERKEY: 25;
    MINKFISTAKEDUNREACHED: 26;
    MAXSUPPLYEXEECED: 27;
    SAVEACCOUNTERROR: 28;
    LOADACCOUNTERROR: 29;
    SAMEACCOUNTERROR: 30;
    ASSETPAUSED: 31;
    DELETEGATEERROR: 32;
    WITHDRAWNOTAVAILABLE: 33;
    ERROVERFLOW: 34;
    SETSTAKINGERR: 35;
    SETMARKETORDERERR: 36;
    BALANCEERROR: 37;
    KAPPERROR: 38;
    UNFREEZEERROR: 39;
    UNDELETEGATEERROR: 40;
    WITHDRAWERROR: 41;
    CLAIMERROR: 42;
    BUCKETSEXCEDED: 43;
    ASSETCANTBEWIPED: 44;
    ASSETCANTADDROLES: 45;
    FREEZEERROR: 46;
    FAIL: 99;
  }

  export const TXResultCode: TXResultCodeMap;
}

