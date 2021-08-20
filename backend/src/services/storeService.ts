import { getRepository } from 'typeorm';
import joi from 'joi';
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
        select: ['ownerName', 'type', 'storeName', 'value'],
    });
    return result;
}
