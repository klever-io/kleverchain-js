import core from "../core";
import { ErrEmptyAddress, ErrLoadSdk } from "../core/errors";
import { sendTransaction } from "../transaction";
import {
  IAccount,
  IBasePayload,
  INodeAccount,
  ITransactionProps,
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
  ISetITOPrices,
  ITransfer,
  IUndelegate,
  IUnfreeze,
  IUpdateAccountPermission,
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

  async sendTransfer(payload: ITransfer, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Transfer,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendCreateMarketplace(
    payload: ICreateMarket,
    props?: ITransactionProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CreateMarketplace,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendConfigMarketplace(
    payload: IConfigMarket,
    props?: ITransactionProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.ConfigMarketplace,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendFreeze(payload: IFreeze, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Freeze,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendUnfreeze(payload: IUnfreeze, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Unfreeze,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendWithdraw(payload: IWithdraw, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Withdraw,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendUndelegate(payload: IUndelegate, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Undelegate,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendDelegate(payload: IDelegate, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Delegate,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async setAccountName(payload: ISetAccountName, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.SetAccountName,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendVotes(payload: IVotes, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Votes,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendClaim(payload: IClaim, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Claim,
      {
        ...basePayload,
        ...payload,
      },
      props
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
    props?: ITransactionProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CancelMarketOrder,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendSellOrder(payload: ISellOrder, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.SellOrder,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendBuyOrder(payload: IBuyOrder, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.BuyOrder,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendCreateAsset(payload: ICreateAsset, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CreateAsset,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendProposal(payload: IProposal, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Proposal,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendCreateValidator(
    payload: ICreateValidator,
    props?: ITransactionProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CreateValidator,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendConfigValidator(
    payload: ICreateValidator,
    props?: ITransactionProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.ConfigValidator,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendConfigITO(payload: IConfigITO, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.ConfigITO,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendAssetTrigger(payload: IAssetTrigger, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.AssetTrigger,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }
  async sendUpdateAccountPermission(
    payload: IUpdateAccountPermission,
    props?: ITransactionProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.UpdateAccountPermission,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }

  async sendSetITOPrices(payload: ISetITOPrices, props?: ITransactionProps) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.SetITOPrices,
      {
        ...basePayload,
        ...payload,
      },
      props
    );
  }
}

export default Account;
