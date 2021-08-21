import { getRepository } from 'typeorm';
import joi, { object } from 'joi';
import Infos from '../interfaces/InfosInterface';
import Transaction from '../entities/transaction';

export function isValid(infos: Infos) {
    const infosSchema = joi.object({
        ownerName: joi.string().required(),
        storeName: joi.string().required(),
        typeId: joi.number().required(),
        value: joi.number().required(),
        cpf: joi.string().required(),
        creditCard: joi.string().required(),
        date: joi.string().required(),
        hour: joi.string().required(),
    });
    const result = infosSchema.validate(infos);
    if (!('error' in result)) {
        return true;
    } else {
        return false;
    }
}

export async function save(infos: Infos) {
    await getRepository(Transaction).insert(infos);
}

export async function get() {
    const result = await getRepository(Transaction).find({
        relations: ['type'],
        select: ['storeName', 'type', 'value', 'date'],
    });

    const transactions: any[] = [];
    result.forEach((transaction) => {
        let hasStore = -1;
        transactions.forEach((t, index) => {
            if (t.storeName === transaction.storeName) {
                hasStore = index;
            }
        });

        if (hasStore === -1) {
            const newTransaction = {
                storeName: transaction.storeName,
                transactions: [
                    {
                        type: transaction.type.type,
                        name: transaction.type.name,
                        value: transaction.value,
                        date: transaction.date,
                    },
                ],
            };
            transactions.push(newTransaction);
        } else {
            transactions[hasStore].transactions.push({
                type: transaction.type.type,
                name: transaction.type.name,
                value: transaction.value,
                date: transaction.date,
            });
        }
    });
    return transactions;
}
