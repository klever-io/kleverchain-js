import { sendTransaction } from "./transaction";
import { TransactionType } from "./types";
import { ICreateMarket, IFreeze, ITransfer } from "./types/contract";
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
    const response = await sendTransaction(TransactionType.Transfer, {
      ...this.getBasePayload(),
      ...payload,
    });

    return response;
  }

  async createMarketplace(payload: ICreateMarket) {
    const response = await sendTransaction(TransactionType.CreateMarketplace, {
      ...this.getBasePayload(),
      ...payload,
    });

    return response;
  }

  async sendFreeze(payload: IFreeze) {
    const response = await sendTransaction(TransactionType.Freeze, {
      ...this.getBasePayload(),
      ...payload,
    });

    return response;
  }
}

export default Account;
