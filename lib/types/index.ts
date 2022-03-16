import { Account } from "..";

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

export interface IBasePayload {
  sender: string;
  privateKey: string;
}

export interface ISdkContext {
  isLoaded(): boolean;
  getAccount(): Account | null;
  setAccount(account: Account): void;
}

export enum TransactionType {
  Transfer,
  CreateMarketplace,
  ConfigMarketplace,
  Freeze,
  Unfreeze,
  Withdraw,
  Undelegate,
  Delegate,
  SetAccountName,
  Votes,
  Claim,
  Unjail,
  CancelMarketOrder,
  SellOrder,
  BuyOrder,
  CreateAsset,
  Proposal,
  CreateValidator,
  ConfigValidator,
  ConfigICO,
}
