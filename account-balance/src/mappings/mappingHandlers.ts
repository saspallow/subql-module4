import {SubstrateEvent} from "@subql/types";
import {Account} from "../types";
import {Balance} from "@polkadot/types/interfaces";


export async function handleEvent(event: SubstrateEvent): Promise<void> {
    const {event: {data: [account, balance]}} = event;

    //. Create a new Account entity with ID using block hash
    let record = new Account(event.extrinsic.block.block.header.hash.toString());

    // Assign the Polkadot address to the account field
    record.account = account.toString();

    // Assign the Balance to the balance feild "type cast as Balnace"
    record.balance = (balance as Balance).toBigInt();
    await record.save();
}