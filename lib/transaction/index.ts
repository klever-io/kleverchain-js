import * as ed from "@noble/ed25519";
import * as blake from "blakejs"
import _m0 from "protobufjs/minimal";

import { decodeContract } from "./contracts"

import utils from "../utils"
import * as Contracts from './proto/contracts'
import * as proto from "./../../google/protobuf/any";

import { 
  Transaction as T,
  tXContract_ContractTypeToJSON,
  TXContract_ContractType,
  TXContract,
  Transaction_Raw
} from './proto/transaction'

export {
  TXContract_ContractType,
  TXContract,
  Contracts,
  proto,
};

class Transaction {
  data: T;

  constructor(data?: any[] | {
    Nonce?: number;
    Sender?: Uint8Array;
    Contract?: TXContract[];
    PermissionID?: number;
    Data?: Uint8Array[];
    KAppFee?: number;
    BandwidthFee?: number;
    Version?: number;
    ChainID?: Uint8Array;
  }) {
    this.data = T.fromPartial({RawData: data})
  }

  addContract = async (type: TXContract_ContractType, contract: any): Promise<void> => {
    const p = anyMarshal(type, contract);
    const txContract = TXContract.fromPartial({Type: type, Parameter: p})

    this.data.RawData?.Contract?.push(txContract);
  }

  signMessage = async (message: string, privateKey: string): Promise<Uint8Array> => {
    const signature = await ed.sign(message, privateKey);
    const parsedSignature = Buffer.from(signature);
    return parsedSignature;
  };

  computeHash = (): string => {
    try {
      // marshal transaction
      const bytes = Transaction_Raw.encode(this.data.RawData!).finish();
      const rawTransaction = utils.toHex(bytes);
      // compute hash
      const hash = blake.blake2b(bytes, undefined, 32);
      return utils.toHex(hash);
    }catch (e) {
      throw e;
    }
  }

  sign = async (privateKey: string): Promise<Boolean> => {
    let hash: string
    try {
      hash = this.computeHash();
    } catch (e) {
      console.log(e);
      return false;
    }

    const signature = await this.signMessage(hash, privateKey);
    // add signature
    this.data.Signature?.push(signature);

    return true;
  };

  hex = (): string => {
    const bytes = T.encode(this.data).finish()
    const rawTransaction = utils.toHex(bytes);
        
    return rawTransaction;
  }

  toJSON = (): string => {
    const j = T.toJSON(this.data)
    return JSON.stringify(j);
  }
  
  decode = (): string => {
    const enc = new TextDecoder()

    const rawTX = this.data.RawData!;
    const decodedTX: any = {
      Hash: this.computeHash(),
      BlockNum: this.data.Block,
      Sender: utils.encodeAddress(rawTX.Sender!),
		  Nonce:  rawTX.Nonce,
      PermissionID: rawTX.PermissionID,
      Data: [],
      KAppFee: rawTX.KAppFee,
      BandwidthFee: rawTX.BandwidthFee,
      Status: this.data.Block?"on-chain":"pending",
      Result: this.data.Result,
      ResultCode: this.data.ResultCode,
      Version: rawTX.Version,
      ChainID: enc.decode(rawTX.ChainID!),
      Signature: [],
      //Receipts
      Contracts: [],
    }

    rawTX.Data?.forEach(d => { decodedTX.Data.push(enc.decode(d)) })
    this.data.Signature?.forEach( s => { decodedTX.Signature.push(utils.toHex(s)) })
    rawTX.Contract?.forEach(txContract => { 
      decodedTX.Contracts.push( {
        Type: txContract.Type,
        Contract: decodeContract(txContract.Type, txContract.Parameter),
      })
    })
    
    return JSON.stringify(decodedTX);
  }

  toBroadcast = (): any => {
    return T.toJSON(this.data)
  }
}

const anyMarshal = (type: TXContract_ContractType, contract: any): proto.Any =>  {
  var type_url = "type.googleapis.com/proto."
  var data: Uint8Array

  switch (type) {
    case TXContract_ContractType.TransferContractType:
      data = Contracts.TransferContract.encode(contract).finish()
      type_url += "TransferContract"
      break;
    case TXContract_ContractType.CreateAssetContractType:
      data = Contracts.CreateAssetContract.encode(contract).finish()
      type_url += "CreateAssetContract"
      break;
    case TXContract_ContractType.CreateValidatorContractType:
      data = Contracts.CreateValidatorContract.encode(contract).finish()
      type_url += "CreateValidatorContract"
      break;
    case TXContract_ContractType.ValidatorConfigContractType:
      data = Contracts.ValidatorConfigContract.encode(contract).finish()
      type_url += "ValidatorConfigContract"
      break;
    case TXContract_ContractType.FreezeContractType:
      data = Contracts.FreezeContract.encode(contract).finish()
      type_url += "FreezeContract"
      break;
    case TXContract_ContractType.UnfreezeContractType:
      data = Contracts.UnfreezeContract.encode(contract).finish()
      type_url += "UnfreezeContract"
      break;
    case TXContract_ContractType.DelegateContractType:
      data = Contracts.DelegateContract.encode(contract).finish()
      type_url += "DelegateContract"
      break;
    case TXContract_ContractType.UndelegateContractType:
      data = Contracts.UndelegateContract.encode(contract).finish()
      type_url += "UndelegateContract"
      break;
    case TXContract_ContractType.WithdrawContractType:
      data = Contracts.WithdrawContract.encode(contract).finish()
      type_url += "WithdrawContract"
      break;
    case TXContract_ContractType.ClaimContractType:
      data = Contracts.ClaimContract.encode(contract).finish()
      type_url += "ClaimContract"
      break;
    case TXContract_ContractType.UnjailContractType:
      data = Contracts.UnjailContract.encode(contract).finish()
      type_url += "UnjailContract"
      break;
    case TXContract_ContractType.AssetTriggerContractType:
      data = Contracts.AssetTriggerContract.encode(contract).finish()
      type_url += "AssetTriggerContract"
      break;
    case TXContract_ContractType.SetAccountNameContractType:
      data = Contracts.SetAccountNameContract.encode(contract).finish()
      type_url += "SetAccountNameContract"
      break;
    case TXContract_ContractType.ProposalContractType:
      data = Contracts.ProposalContract.encode(contract).finish()
      type_url += "ProposalContract"
      break;
    case TXContract_ContractType.VoteContractType:
      data = Contracts.VoteContract.encode(contract).finish()
      type_url += "VoteContract"
      break;
    case TXContract_ContractType.ConfigITOContractType:
      data = Contracts.ConfigITOContract.encode(contract).finish()
      type_url += "ConfigITOContract"
      break;
    case TXContract_ContractType.SetITOPricesContractType:
      data = Contracts.SetITOPricesContract.encode(contract).finish()
      type_url += "SetITOPricesContract"
      break;
    case TXContract_ContractType.BuyContractType:
      data = Contracts.BuyContract.encode(contract).finish()
      type_url += "BuyContract"
      break;
    case TXContract_ContractType.SellContractType:
      data = Contracts.SellContract.encode(contract).finish()
      type_url += "SellContract"
      break;
    case TXContract_ContractType.CancelMarketOrderContractType:
      data = Contracts.CancelMarketOrderContract.encode(contract).finish()
      type_url += "CancelMarketOrderContract"
      break;
    case TXContract_ContractType.CreateMarketplaceContractType:
      data = Contracts.CreateMarketplaceContract.encode(contract).finish()
      type_url += "CreateMarketplaceContract"
      break;
    case TXContract_ContractType.ConfigMarketplaceContractType:
      data = Contracts.ConfigMarketplaceContract.encode(contract).finish()
      type_url += "ConfigMarketplaceContract"
      break;
    case TXContract_ContractType.UpdateAccountPermissionContractType:
      data = Contracts.UpdateAccountPermissionContract.encode(contract).finish()
      type_url += "UpdateAccountPermissionContract"
      break;
    default:
      throw("invalid transaction type");
  }

  return proto.Any.fromPartial({
    type_url: type_url, 
    value: data,
  });
}

export default Transaction;
