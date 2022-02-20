import Account from "../account";
import { IPemResponse } from "../types";

const getAccountByPem = async (pemData: string): Promise<Account> => {
  const { address, privateKey } = await window.parsePemFileData(pemData);

  return new Account(address, privateKey);
};

const createAccount = async (): Promise<IPemResponse> => {
  const account = await window.createAccount();

  return account;
};

export { getAccountByPem, createAccount };
