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
import { ITransactionResponse } from "../types/dtos";

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

  async sendTransfer(
    payload: ITransfer,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Transfer,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendCreateMarketplace(
    payload: ICreateMarket,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CreateMarketplace,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendConfigMarketplace(
    payload: IConfigMarket,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.ConfigMarketplace,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendFreeze(
    payload: IFreeze,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Freeze,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendUnfreeze(
    payload: IUnfreeze,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Unfreeze,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendWithdraw(
    payload: IWithdraw,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Withdraw,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendUndelegate(
    payload: IUndelegate,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Undelegate,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendDelegate(
    payload: IDelegate,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Delegate,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async setAccountName(
    payload: ISetAccountName,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.SetAccountName,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendVotes(
    payload: IVotes,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Votes,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendClaim(
    payload: IClaim,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Claim,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
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
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CancelMarketOrder,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendSellOrder(
    payload: ISellOrder,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.SellOrder,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendBuyOrder(
    payload: IBuyOrder,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.BuyOrder,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendCreateAsset(
    payload: ICreateAsset,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CreateAsset,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendProposal(
    payload: IProposal,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.Proposal,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendCreateValidator(
    payload: ICreateValidator,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.CreateValidator,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendConfigValidator(
    payload: ICreateValidator,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.ConfigValidator,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendConfigITO(
    payload: IConfigITO,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.ConfigITO,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendAssetTrigger(
    payload: IAssetTrigger,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.AssetTrigger,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }
  async sendUpdateAccountPermission(
    payload: IUpdateAccountPermission,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.UpdateAccountPermission,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }

  async sendSetITOPrices(
    payload: ISetITOPrices,
    autobroadcast?: boolean,
    props?: IContractProps
  ) {
    const basePayload = await this.getBasePayload();
    return sendTransaction(
      TransactionType.SetITOPrices,
      {
        ...basePayload,
        ...payload,
      },
      autobroadcast,
      props
    );
  }
}

export default Account;
