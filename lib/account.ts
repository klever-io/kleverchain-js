import { sendTransaction } from "./transaction";
import { TransactionType } from "./types";
import { IBasePayload } from "./types/payload";

interface ITransfer {
  receiver: string;
  amount: number;
  asset?: string;
}

interface ICreateMarket {
  name: string;
  referralAddress?: string;
  referralPercentage: number;
}

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
}

export default Account;
