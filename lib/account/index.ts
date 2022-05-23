import { core } from "..";
import { ErrEmptyAddress, ErrLoadSdk } from "../core/errors";
import { sendTransaction } from "../transaction";
import {
  IAccount,
  IBasePayload,
  INodeAccount,
  TransactionType,
} from "../types";
import {
  IAssetTrigger,
  IBuyOrder,
  ICancelMarketOrder,
  IClaim,
  IConfigITO,
  IConfigMarket,
  ICreateAsset,
  ICreateMarket,
  ICreateValidator,
  IDelegate,
  IFreeze,
  IProposal,
  ISellOrder,
  ISetAccountName,
  ITransfer,
  IUndelegate,
  IUnfreeze,
  IVotes,
  IWithdraw,
} from "../types/contract";

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
    if (!core.isSDKLoaded()) {
      throw ErrLoadSdk;
    }

    if (this.address.length === 0) {
      throw ErrEmptyAddress;
    }

    const response = await window.getAccount(this.address);

    const account: IAccount = JSON.parse(response);
    if (account.error.length !== 0) {
      return 0;
    }

    return account.data.account.balance;
  }

  async getNonce() {
    const request = await fetch(
      `${
        process.env.REACT_APP_DEFAULT_NODE_HOST ||
        "https://node.testnet.klever.finance"
      }/address/${this.address}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response: INodeAccount = await request.json();

    return response.data.account.Nonce;
  }

  async getBasePayload() {
    const nonce = await this.getNonce();

    const basePayload: IBasePayload = {
      sender: this.address,
      privateKey: this.privateKey,
      nonce,
    };

    return basePayload;
  }

  async sendTransfer(payload: ITransfer) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Transfer, {
      ...basePayload,
      ...payload,
    });
  }

  async sendCreateMarketplace(payload: ICreateMarket) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.CreateMarketplace, {
      ...basePayload,
      ...payload,
    });
  }

  async sendConfigMarketplace(payload: IConfigMarket) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.ConfigMarketplace, {
      ...basePayload,
      ...payload,
    });
  }

  async sendFreeze(payload: IFreeze) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Freeze, {
      ...basePayload,
      ...payload,
    });
  }

  async sendUnfreeze(payload: IUnfreeze) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Unfreeze, {
      ...basePayload,
      ...payload,
    });
  }

  async sendWithdraw(payload: IWithdraw) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Withdraw, {
      ...basePayload,
      ...payload,
    });
  }

  async sendUndelegate(payload: IUndelegate) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Undelegate, {
      ...basePayload,
      ...payload,
    });
  }

  async sendDelegate(payload: IDelegate) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Delegate, {
      ...basePayload,
      ...payload,
    });
  }

  async setAccountName(payload: ISetAccountName) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.SetAccountName, {
      ...basePayload,
      ...payload,
    });
  }

  async sendVotes(payload: IVotes) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Votes, {
      ...basePayload,
      ...payload,
    });
  }

  async sendClaim(payload: IClaim) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Claim, {
      ...basePayload,
      ...payload,
    });
  }

  async sendUnjail() {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Unjail, {
      ...basePayload,
    });
  }

  async sendCancelMarketOrder(payload: ICancelMarketOrder) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.CancelMarketOrder, {
      ...basePayload,
      ...payload,
    });
  }

  async sendSellOrder(payload: ISellOrder) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.SellOrder, {
      ...basePayload,
      ...payload,
    });
  }

  async sendBuyOrder(payload: IBuyOrder) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.BuyOrder, {
      ...basePayload,
      ...payload,
    });
  }

  async sendCreateAsset(payload: ICreateAsset) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.CreateAsset, {
      ...basePayload,
      ...payload,
    });
  }

  async sendProposal(payload: IProposal) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Proposal, {
      ...basePayload,
      ...payload,
    });
  }

  async sendCreateValidator(payload: ICreateValidator) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.CreateValidator, {
      ...basePayload,
      ...payload,
    });
  }

  async sendConfigValidator(payload: ICreateValidator) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.ConfigValidator, {
      ...basePayload,
      ...payload,
    });
  }

  async sendConfigITO(payload: IConfigITO) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.ConfigITO, {
      ...basePayload,
      ...payload,
    });
  }

  async sendAssetTrigger(payload: IAssetTrigger) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.AssetTrigger, {
      ...basePayload,
      ...payload,
    });
  }
}

export default Account;
