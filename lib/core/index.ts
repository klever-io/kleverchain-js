import Account from "../account";
import { IBroadcastResponse, IPemResponse } from "../types/dtos";
import { ErrLoadSdk } from "./errors";

const isSDKLoaded = async () => {
  if (!!globalThis.getAccount) return true;

  for (let i = 0; i < 100; i++) {
    const isLoaded = await new Promise((resolve) =>
      setTimeout(() => resolve(!!globalThis.getAccount), 50)
    );

    if (isLoaded) return true;
  }

  return false;
};

const getAccountByPem = async (pemData: string): Promise<Account> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const { address, privateKey } = await globalThis.parsePemFileData(pemData);

  return new Account(address, privateKey);
};

const createAccount = async (): Promise<IPemResponse> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const account = await globalThis.createAccount();

  return account;
};

const broadcastTransactions = async (
  transactions: string
): Promise<IBroadcastResponse> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const response = await globalThis.broadcast(transactions);

  return response;
};

const core = {
  getAccountByPem,
  createAccount,
  isSDKLoaded,
  broadcastTransactions,
};

export default core;
