import Transaction, { Contracts, TXContract_ContractType } from ".";
import utils from "../utils";

describe("Transaction", () => {
  it("should be able to create a new Transaction", async () => {
    const tx = new Transaction();

    expect(tx).toBeInstanceOf(Transaction);
  });

 
  it("should be able to create a new transaction with transfer contract", async () => {
    const enc = new TextEncoder();
    const senderDecoded = await utils.decodeAddress("klv1vq9f7xtazuk9y3n46ukthgf2l30ev2s0qxvs6dfp4f2e76sfu3xshpmjsr");
    const tx  = new Transaction({
      Sender: senderDecoded,
      Nonce: 158,
      BandwidthFee: 1000000,
      KAppFee: 500000,
      Version: 1,
      ChainID: enc.encode("100420")
    })
    
    const transfer = Contracts.TransferContract.fromPartial({
      ToAddress: await utils.decodeAddress("klv1fpwjz234gy8aaae3gx0e8q9f52vymzzn3z5q0s5h60pvktzx0n0qwvtux5"),
      AssetID: enc.encode("KLV"),
      Amount: 100 * 10 ** 6,
    })

    tx.data.RawData?.Data?.push(enc.encode("KLEVER TEST"))
    
    tx.addContract(TXContract_ContractType.TransferContractType, transfer)
    tx.addContract(TXContract_ContractType.ProposalContractType, Contracts.ProposalContract.fromPartial({
      Parameters: {
        10: enc.encode("10")
      },
      Description: enc.encode("WORKING ON IT next proposal"),
      EpochsDuration: 10,
    }));
    tx.addContract(TXContract_ContractType.SetITOPricesContractType, Contracts.SetITOPricesContract.fromPartial(
      {
        AssetID: enc.encode("DVK-1234"),
        PackInfo: {
          "KLV": {
            Packs: [
              {
                Amount: 10,
                Price: 10000,
              },
              {
                Amount: 100,
                Price: 100000,
              }
            ],
          },
          "KUSD-1234": {
            Packs: [
              {
                Amount: 10,
                Price: 2000,
              },
              {
                Amount: 100,
                Price: 20000,
              }
            ],
          },
        }
      }
    ));

    await tx.sign("0011223344556677889900112233445566778899001122334455667788991122")

    expect(tx.data.RawData?.Sender).toEqual(senderDecoded);
    expect(tx.data.RawData?.Nonce).toEqual(158);
    expect(tx.data.RawData?.Contract?.length).toEqual(3);

    console.log(JSON.parse(await tx.decode()))
    console.log(tx.decode())
  });
});
