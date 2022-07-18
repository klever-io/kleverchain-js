import { TransactionType, ISentTransaction, ISentContract } from "../types";
import parseTransfer from "./contracts/transfer";

const getContractData = (
  type: TransactionType,
  payload: any,
  transaction: ISentTransaction
): void => {
  let contract = {} as ISentContract;
  switch (type) {
    case TransactionType.Transfer:
      contract = parseTransfer(payload);
      break;
  }
  transaction.RawData.Contract.push(contract);
};

const getFees = (props: any): any => {
  const { KAppFee, BandwidthFee } = props;

  return {
    KAppFee: KAppFee,
    BandwidthFee: BandwidthFee,
  };
};

const getChainID = (): string => {
  return "";
};

const getNonce = async (): Promise<number> => {
  return 0;
};

export { getContractData, getFees, getChainID, getNonce };
