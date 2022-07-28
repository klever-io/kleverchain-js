import Account from "../account";
import { ITransaction } from "./dtos";

export interface IAccount {
  data: {
    account: {
      address: string;
      nonce: number;
      rootHash: string;
      balance: number;
      allowance: number;
      timestamp: number;
    };
  };
  error: string;
  code: string;
}

export interface INodeAccount {
  data: {
    account: {
      Address: string;
      RootHash: string;
      Balance: number;
      Nonce: number;
      Allowance: number;
    };
  };
  error: string;
  code: string;
}

export interface IBasePayload {
  sender?: string;
  privateKey?: string;
  nonce?: number;
}

export interface ISdkContext {
  isLoaded(): boolean;
  getAccount(): Account | null;
  setAccount(account: Account): void;
}

export interface ITransactionProps {
  metadata?: string;
  autobroadcast?: boolean;
  previousTX?: ITransaction | ITransaction[];
}

export interface IContractProps {
  metadata?: string;
  previousTX?: string;
}

export enum TransactionType {
  Transfer,
  CreateAsset,
  CreateValidator,
  ConfigValidator,
  Freeze,
  Unfreeze,
  Delegate,
  Undelegate,
  Withdraw,
  Claim,
  Unjail,
  AssetTrigger,
  SetAccountName,
  Proposal,
  Votes,
  ConfigITO,
  SetITOPrices,
  BuyOrder,
  SellOrder,
  CancelMarketOrder,
  CreateMarketplace,
  ConfigMarketplace,
  UpdateAccountPermission,
}

export enum TriggerType {
  Mint,
  Burn,
  Wipe,
  Pause,
  Resume,
  ChangeOwner,
  AddRole,
  RemoveRole,
  UpdateMetadata,
  StopNFTMint,
  UpdateLogo,
  UpdateURIs,
  ChangeRoyaltiesReceiver,
  UpdateStaking,
}

export interface IProvider {
  api: string;
  node: string;
}
