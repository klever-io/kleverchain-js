import KleverWeb from "@klever/kleverweb";
import {
  IBroadcastResponse,
  IContractRequest,
  ITxOptionsRequest,
} from "@klever/kleverweb/dist/types/dtos";
import { IProvider, ITransaction } from "..";
import { ErrLoadKleverWeb } from "./errors";

const isKleverWebLoaded = () => {
  return !!globalThis?.kleverWeb?.active;
};

const broadcastTransactions = async (
  transactions: ITransaction[]
): Promise<IBroadcastResponse> => {
  if (!isKleverWebLoaded()) {
    throw ErrLoadKleverWeb;
  }

  const response = await globalThis.kleverWeb.broadcastTransactions(
    transactions
  );

  return response;
};

const setProvider = async (provider: IProvider) => {
  globalThis.kleverWeb = {
    ...globalThis?.kleverWeb,
    provider,
  };
};

const signMessage = async (
  message: string,
  privateKey: string
): Promise<string> => {
  if (!isKleverWebLoaded()) {
    throw ErrLoadKleverWeb;
  }

  const payload = JSON.stringify({
    message,
    privateKey,
  });

  const response = await globalThis.kleverWeb.signMessage(payload);

  return response;
};

const signTransaction = async (tx: ITransaction): Promise<ITransaction> => {
  if (!isKleverWebLoaded()) {
    throw ErrLoadKleverWeb;
  }

  const response = await globalThis.kleverWeb.signTransaction(tx);

  return response;
};

const validateSignature = async (
  message: string,
  signature: string,
  publicKey: string
): Promise<boolean> => {
  if (!isKleverWebLoaded()) {
    throw ErrLoadKleverWeb;
  }

  const payload = JSON.stringify({
    message,
    signature,
    publicKey,
  });

  const response = await globalThis.kleverWeb.validateSignature(payload);

  return response;
};

const buildTransaction = async (
  contracts: IContractRequest[],
  txData?: string[],
  options?: ITxOptionsRequest
): Promise<ITransaction> => {
  return globalThis.kleverWeb.buildTransaction(contracts, txData, options);
};

const core = {
  isKleverWebLoaded,
  broadcastTransactions,
  setProvider,
  signMessage,
  signTransaction,
  validateSignature,
  buildTransaction,
};

export default core;
