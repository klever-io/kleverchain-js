import {
  IBroadcastResponse,
  IContractRequest,
  ITxOptionsRequest,
} from "@klever/kleverweb/dist/types/dtos";
import { IProvider, ITransaction } from "..";
import { ErrLoadKleverWeb } from "../errors";

import * as ed from "@noble/ed25519";

const isKleverWebLoaded = () => {
  return !!globalThis?.kleverWeb;
};

const isKleverWebActive = () => {
  return !!globalThis?.kleverWeb?.address;
};

const initialize = async () => {
  await globalThis?.kleverWeb?.initialize();
};

const getWalletAddress = (): string => {
  return globalThis?.kleverWeb?.getWalletAddress();
};

const getProvider = (): IProvider => {
  return globalThis?.kleverWeb?.getProvider();
};

const setProvider = (pvd: IProvider) => {
  globalThis?.kleverWeb?.setProvider(pvd);
  return;
};

const broadcastTransactions = async (
  transactions: ITransaction[]
): Promise<IBroadcastResponse> => {
  if (!isKleverWebActive()) {
    throw ErrLoadKleverWeb;
  }

  const response = await globalThis.kleverWeb.broadcastTransactions(
    transactions
  );

  return response;
};

const signMessage = async (
  message: string,
  privateKey: string
): Promise<string> => {
  if (!isKleverWebActive()) {
    throw ErrLoadKleverWeb;
  }

  const payload = JSON.stringify({
    message,
    privateKey,
  });

  const response = await globalThis?.kleverWeb?.signMessage(payload);

  return response;
};

const signTransaction = async (tx: ITransaction): Promise<ITransaction> => {
  if (!isKleverWebActive()) {
    throw ErrLoadKleverWeb;
  }

  const response = await globalThis?.kleverWeb?.signTransaction(tx);

  return response;
};

const validateSignature = async (
  message: string,
  signature: string,
  publicKey: string
): Promise<boolean> => {
  if (!isKleverWebActive()) {
    throw ErrLoadKleverWeb;
  }

  let response;
  if (typeof window !== "undefined") {
    const payload = JSON.stringify({
      message,
      signature,
      publicKey,
    });

    response = await globalThis?.kleverWeb?.validateSignature(payload);
  } else if (typeof global !== "undefined") {
    response = await ed.verify(signature, message, publicKey);
  } else {
    throw new Error("neither global nor window is defined");
  }

  return response;
};

const buildTransaction = async (
  contracts: IContractRequest[],
  txData?: string[],
  options?: ITxOptionsRequest
): Promise<ITransaction> => {
  return globalThis?.kleverWeb?.buildTransaction(contracts, txData, options);
};

const web = {
  isKleverWebLoaded,
  isKleverWebActive,
  broadcastTransactions,
  signMessage,
  signTransaction,
  validateSignature,
  buildTransaction,
  initialize,
  getWalletAddress,
  getProvider,
  setProvider,
};

export default web;
