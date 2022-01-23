import {SubstrateBlock} from "@subql/types";
import {StarterEntity} from "../types";


export async function handleBlock(_block: SubstrateBlock): Promise<void> {
    //Create a new starterEntity with ID using block hash
    let record = new StarterEntity(_block.block.header.hash.toString());
    //Record block number
    record.field1 = _block.block.header.number.toNumber();

    logger.info('\nBlock Number: ' + record.field1+
    '\nspecVersion: '+ _block.specVersion +
    '\ntimestamp: '+ _block.timestamp +
    '\nparentHash: '+ _block.block.header.parentHash +
    '\nstateRoot: '+ _block.block.header.stateRoot +
    '\nextrinsicsRoot: '+ _block.block.header.extrinsicsRoot +
    '\ndigest: '+ _block.block.header.digest
    )
    await record.save();
}
