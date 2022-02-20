import { sendTransaction } from "./transaction";
import { TransactionType } from "./types";
import {
  ICreateMarket,
  IFreeze,
  ITransfer,
  IUnfreeze,
  IWithdraw,
} from "./types/contract";
import { IBasePayload } from "./types/payload";

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

  async createMarketplace(payload: ICreateMarket) {
    return sendTransaction(TransactionType.CreateMarketplace, {
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
}

export default Account;
