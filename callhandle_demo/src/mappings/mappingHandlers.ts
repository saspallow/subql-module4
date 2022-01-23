import {SubstrateExtrinsic} from "@subql/types";
import {StarterEntity} from "../types";


// export async function handleBlock(block: SubstrateBlock): Promise<void> {
//     //Create a new starterEntity with ID using block hash
//     let record = new StarterEntity(block.block.header.hash.toString());
//     //Record block number
//     record.field1 = block.block.header.number.toNumber();
//     await record.save();
// }

// export async function handleEvent(event: SubstrateEvent): Promise<void> {
//     const {event: {data: [account, balance]}} = event;
//     //Retrieve the record by its ID
//     const record = await StarterEntity.get(event.block.block.header.hash.toString());
//     record.field2 = account.toString();
//     //Big integer type Balance of a transfer event
//     record.field3 = (balance as Balance).toBigInt();
//     await record.save();
// }

export async function handleExtrinsic(extrinsic: SubstrateExtrinsic): Promise<void> {
    let record = new StarterEntity(extrinsic.block.block.header.hash.toString());
    // const record = await StarterEntity.get(extrinsic.block.block.header.hash.toString());
    //Date type timestamp
    record.field4 = extrinsic.block.timestamp;
    //Boolean tyep
    record.field5 = true;

    logger.info('\nBlock Number: ' + extrinsic.block.block.header.number.toNumber())
    logger.info('\nERA: ' + extrinsic.extrinsic.era)
    logger.info('\nSigned: ' + extrinsic.extrinsic.isSigned)
    logger.info('\nSigner: ' + extrinsic.extrinsic.signer)

    await record.save();
}


