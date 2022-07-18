import { IContractProps, ISentTransaction, TransactionType } from "../types";
import { getChainID, getContractData, getFees, getNonce } from "./utils";

const Send = async (
  type: TransactionType,
  payload: any,
  props: IContractProps
): Promise<ISentTransaction> => {
  const Nonce = payload.nonce ? payload.nonce : await getNonce(); //todo:implement
  const Sender = await window.kleverWeb.getWalletAddress();
  const Version = 1;
  const Data = [props.metadata || ""];
  const { KAppFee, BandwidthFee } = getFees(props); // todo: implement
  const ChainID = getChainID(); //todo:implement
  // const PermissionID = props.permissionID

  const transaction: ISentTransaction = {
    RawData: {
      Nonce,
      Sender,
      Contract: [],
      Data,
      KAppFee,
      BandwidthFee,
      Version,
      ChainID,
      // PermissionID,
    },
  };
  getContractData(type, payload, transaction); //todo: implement

  return transaction;
};

export default Send;
