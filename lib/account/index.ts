import core from "../core";
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
  IUpdateAccountPermission,
  ISetITOPrices,
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
    if (!(await core.isSDKLoaded())) {
      throw ErrLoadSdk;
    }

    if (this.address.length === 0) {
      throw ErrEmptyAddress;
    }

    const response = await globalThis.getAccount(this.address);

    const account: IAccount = JSON.parse(response);
    if (account.error.length !== 0) {
      return 0;
    }

    return account.data.account.balance;
  }

  async getNonce() {
    const request = await fetch(
      `${
        process?.env?.REACT_APP_DEFAULT_NODE_HOST ||
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

  async sendTransfer(payload: ITransfer, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Transfer,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendCreateMarketplace(payload: ICreateMarket, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CreateMarketplace,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendConfigMarketplace(payload: IConfigMarket, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.ConfigMarketplace,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendFreeze(payload: IFreeze, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Freeze,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendUnfreeze(payload: IUnfreeze, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Unfreeze,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendWithdraw(payload: IWithdraw, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Withdraw,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendUndelegate(payload: IUndelegate, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Undelegate,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendDelegate(payload: IDelegate, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Delegate,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async setAccountName(payload: ISetAccountName, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.SetAccountName,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendVotes(payload: IVotes, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Votes,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendClaim(payload: IClaim, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Claim,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendUnjail() {
    const basePayload = await this.getBasePayload();
    return sendTransaction(TransactionType.Unjail, {
      ...basePayload,
    });
  }

  async sendCancelMarketOrder(
    payload: ICancelMarketOrder,
    autobroadcast?: boolean
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CancelMarketOrder,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendSellOrder(payload: ISellOrder, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.SellOrder,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendBuyOrder(payload: IBuyOrder, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.BuyOrder,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendCreateAsset(payload: ICreateAsset, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CreateAsset,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendProposal(payload: IProposal, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Proposal,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendCreateValidator(
    payload: ICreateValidator,
    autobroadcast?: boolean
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CreateValidator,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendConfigValidator(
    payload: ICreateValidator,
    autobroadcast?: boolean
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.ConfigValidator,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendConfigITO(payload: IConfigITO, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.ConfigITO,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendAssetTrigger(payload: IAssetTrigger, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.AssetTrigger,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }
  async sendUpdateAccountPermission(
    payload: IUpdateAccountPermission,
    autobroadcast?: boolean
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.UpdateAccountPermission,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }

  async sendSetITOPrices(payload: ISetITOPrices, autobroadcast?: boolean) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.SetITOPrices,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast
    );
  }
}

export default Account;
