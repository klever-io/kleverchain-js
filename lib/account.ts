import { sendTransaction } from "./transaction";
import { TransactionType } from "./types";
import {
  ICreateMarket,
  ITransfer,
  IUndelegate,
  IDelegate,
  IFreeze,
  ISetAccountName,
  IUnfreeze,
  IWithdraw,
  IVotes,
  IClaim,
  ICancelMarketOrder,
  ISellOrder,
  IBuyOrder,
  ICreateAsset,
  IProposal,
  IConfigMarket,
  ICreateValidator,
} from "./types/contract";
import { IBasePayload } from "./types/payload";
import { IAccountResponse } from "./types/response";

class Account {
  private address: string;
  private privateKey: string;

  constructor(address: string, privateKey: string) {
    this.address = address;
    this.privateKey = privateKey;
  }

  getAddress() {
    return this.address;
  }

  getPrivateKey() {
    return this.privateKey;
  }

  async getBalance() {
    const response = await window.getAccount(this.address);

    const account: IAccountResponse = JSON.parse(response);
    if (account.error.length !== 0) {
      return 0;
    }

    return account.data.account.balance;
  }

  async getAssets() {
    const response = await window.getAccount(this.address);

    const account: IAccountResponse = JSON.parse(response);
    if (account.error.length !== 0) {
      return [];
    }

    return account.data.account.assets;
  }

  getBasePayload() {
    const basePayload: IBasePayload = {
      sender: this.address,
      privateKey: this.privateKey,
    };

    return basePayload;
  }

  async sendTransfer(payload: ITransfer) {
    return sendTransaction(TransactionType.Transfer, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendCreateMarketplace(payload: ICreateMarket) {
    return sendTransaction(TransactionType.CreateMarketplace, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendConfigMarketplace(payload: IConfigMarket) {
    return sendTransaction(TransactionType.ConfigMarketplace, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendFreeze(payload: IFreeze) {
    return sendTransaction(TransactionType.Freeze, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendUnfreeze(payload: IUnfreeze) {
    return sendTransaction(TransactionType.Unfreeze, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendWithdraw(payload: IWithdraw) {
    return sendTransaction(TransactionType.Withdraw, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendUndelegate(payload: IUndelegate) {
    return sendTransaction(TransactionType.Undelegate, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendDelegate(payload: IDelegate) {
    return sendTransaction(TransactionType.Delegate, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async setAccountName(payload: ISetAccountName) {
    return sendTransaction(TransactionType.SetAccountName, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendVotes(payload: IVotes) {
    return sendTransaction(TransactionType.Votes, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendClaim(payload: IClaim) {
    return sendTransaction(TransactionType.Claim, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendUnjail(payload: IClaim) {
    return sendTransaction(TransactionType.Unjail, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendCancelMarketOrder(payload: ICancelMarketOrder) {
    return sendTransaction(TransactionType.CancelMarketOrder, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendSellOrder(payload: ISellOrder) {
    return sendTransaction(TransactionType.SellOrder, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendBuyOrder(payload: IBuyOrder) {
    return sendTransaction(TransactionType.BuyOrder, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendCreateAsset(payload: ICreateAsset) {
    return sendTransaction(TransactionType.CreateAsset, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendProposal(payload: IProposal) {
    return sendTransaction(TransactionType.Proposal, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendCreateValidator(payload: ICreateValidator) {
    return sendTransaction(TransactionType.CreateValidator, {
      ...this.getBasePayload(),
      ...payload,
    });
  }

  async sendConfigValidator(payload: ICreateValidator) {
    return sendTransaction(TransactionType.ConfigValidator, {
      ...this.getBasePayload(),
      ...payload,
    });
  }
}

export default Account;
