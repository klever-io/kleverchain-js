import Account from "../account";

const getAccountByPem = async (pemData: string): Promise<Account> => {
  const { address, privateKey } = await window.parsePemFileData(pemData);

  return new Account(address, privateKey);
};

export { getAccountByPem };
