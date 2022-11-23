import * as ed from "@noble/ed25519";
import * as blake from "blakejs"
import _m0 from "protobufjs/minimal";

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

  sign = async (privateKey: string): Promise<Boolean> => {
    let hash;

    try {
      // marshal transaction
      const bytes = Transaction_Raw.encode(this.data.RawData!).finish();
      const rawTransaction = utils.toHex(bytes);
      // compute hash
      hash = blake.blake2bHex(rawTransaction);
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
}

const anyMarshal = (type: TXContract_ContractType, contract: any): proto.Any =>  {
  const typeUrl = "type.googleapis.com/proto."+tXContract_ContractTypeToJSON(type);
  var data: Uint8Array

  switch (type) {
    case TXContract_ContractType.TransferContractType:
      data = Contracts.TransferContract.encode(contract).finish()
      break;
    case TXContract_ContractType.CreateAssetContractType:
      data = Contracts.CreateAssetContract.encode(contract).finish()
      break;
    case TXContract_ContractType.CreateValidatorContractType:
      data = Contracts.CreateValidatorContract.encode(contract).finish()
      break;
    case TXContract_ContractType.ValidatorConfigContractType:
      data = Contracts.ValidatorConfigContract.encode(contract).finish()
      break;
    case TXContract_ContractType.FreezeContractType:
      data = Contracts.FreezeContract.encode(contract).finish()
      break;
    case TXContract_ContractType.UnfreezeContractType:
      data = Contracts.UnfreezeContract.encode(contract).finish()
      break;
    case TXContract_ContractType.DelegateContractType:
      data = Contracts.DelegateContract.encode(contract).finish()
      break;
    case TXContract_ContractType.UndelegateContractType:
      data = Contracts.UndelegateContract.encode(contract).finish()
      break;
    case TXContract_ContractType.WithdrawContractType:
      data = Contracts.WithdrawContract.encode(contract).finish()
      break;
    case TXContract_ContractType.ClaimContractType:
      data = Contracts.ClaimContract.encode(contract).finish()
      break;
    case TXContract_ContractType.UnjailContractType:
      data = Contracts.UnjailContract.encode(contract).finish()
      break;
    case TXContract_ContractType.AssetTriggerContractType:
      data = Contracts.AssetTriggerContract.encode(contract).finish()
      break;
    case TXContract_ContractType.SetAccountNameContractType:
      data = Contracts.SetAccountNameContract.encode(contract).finish()
      break;
    case TXContract_ContractType.ProposalContractType:
      data = Contracts.ProposalContract.encode(contract).finish()
      break;
    case TXContract_ContractType.VoteContractType:
      data = Contracts.VoteContract.encode(contract).finish()
      break;
    case TXContract_ContractType.ConfigITOContractType:
      data = Contracts.ConfigITOContract.encode(contract).finish()
      break;
    case TXContract_ContractType.SetITOPricesContractType:
      data = Contracts.SetITOPricesContract.encode(contract).finish()
      break;
    case TXContract_ContractType.BuyContractType:
      data = Contracts.BuyContract.encode(contract).finish()
      break;
    case TXContract_ContractType.SellContractType:
      data = Contracts.SellContract.encode(contract).finish()
      break;
    case TXContract_ContractType.CancelMarketOrderContractType:
      data = Contracts.CancelMarketOrderContract.encode(contract).finish()
      break;
    case TXContract_ContractType.CreateMarketplaceContractType:
      data = Contracts.CreateMarketplaceContract.encode(contract).finish()
      break;
    case TXContract_ContractType.ConfigMarketplaceContractType:
      data = Contracts.ConfigMarketplaceContract.encode(contract).finish()
      break;
    case TXContract_ContractType.UpdateAccountPermissionContractType:
      data = Contracts.UpdateAccountPermissionContract.encode(contract).finish()
      break;
    default:
      throw("invalid transaction type");
  }

  return proto.Any.fromPartial({
    typeUrl: typeUrl, 
    value: data,
  });
}

export default Transaction;
