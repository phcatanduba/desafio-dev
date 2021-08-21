import { getRepository } from 'typeorm';

import Transaction from '../../src/entities/transaction';

export async function clearDatabase() {
    await getRepository(Transaction).delete({});
}
