import KleverWeb from "@klever/kleverweb";
import {
  IContractRequest,
  IProvider,
  ITransaction,
  ITxOptionsRequest,
} from "@klever/kleverweb/dist/types/dtos";
import core from "../core";
import {
  ErrEmptyAddress,
  ErrInvalidAddress,
  ErrLoadKleverWeb,
} from "../core/errors";
import { IAccountNonce, INodeAccount } from "../types";

class Account {
  constructor(privateKey?: string) {
    if (!globalThis?.kleverWeb) {
      globalThis.kleverWeb = {
        ...globalThis?.kleverWeb,
      };
    }
    privateKey && globalThis.kleverWeb.setPrivateKey(privateKey);
  }
  getWalletAddress(): string {
    return globalThis?.kleverWeb?.getWalletAddress();
  }

  getProvider = (): IProvider => {
    return globalThis?.kleverWeb?.getProvider();
  };

  async getAccount() {
    if (!core.isKleverWebActive()) {
      throw ErrLoadKleverWeb;
    }

    if (globalThis?.kleverWeb?.getWalletAddress()?.length === 0) {
      throw ErrEmptyAddress;
    }

    const request = await fetch(
      `${
        globalThis?.kleverWeb?.provider?.node
      }/address/${globalThis?.kleverWeb?.getWalletAddress()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response: INodeAccount = await request.json();
    if (response.error.length !== 0) {
      throw response.error;
    }

    return response?.data?.account;
  }

  async getNonce() {
    const request = await fetch(
      `${
        globalThis?.kleverWeb?.provider?.node
      }/address/${globalThis?.kleverWeb?.getWalletAddress()}/nonce`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response: IAccountNonce = await request.json();

    return response.data;
  }

  buildTransaction = core.buildTransaction;

  signTransaction = core.signTransaction;

  validateSignature = core.validateSignature;

  signMessage = core.signMessage;

  broadcastTransactions = core.broadcastTransactions;
}

export default Account;
