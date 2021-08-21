import supertest from 'supertest';
import { getConnection, getRepository } from 'typeorm';
import app, { init } from '../../src/app';
import { clearDatabase } from '../utils/database';
import faker from 'faker/locale/pt_BR';
import Infos from '../../src/interfaces/InfosInterface';
import Transaction from '../../src/entities/transaction'

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await getConnection().close();
});

describe('POST to /store-info', () => {
    it('should answer with status 400', async () => {

        const infos = {};

        const response = await supertest(app).post('/store-info').send(infos);


        expect(response.status).toBe(400);
    });
});

describe('POST to /store-info', () => {
    it('should answer with status 200', async () => {

        const infos: Infos = {
            ownerName: faker.name.firstName(),
            storeName: faker.company.companyName(),
            typeId: faker.datatype.number(7) + 1,
            value: faker.datatype.number(),
            cpf: '0123456789',
            creditCard: faker.finance.creditCardNumber(),
            date: faker.date.recent().toString(),
            hour: faker.time.recent().toString(),
        };

        const response = await supertest(app).post('/store-info').send(infos);

        expect(response.status).toBe(200);
    });
});

describe('POST to /store-info', () => {
    it('should return an array of object from database', async () => {

        const infos: Infos = {
            ownerName: faker.name.firstName(),
            storeName: faker.company.companyName(),
            typeId: faker.datatype.number(8),
            value: faker.datatype.number(),
            cpf: '0123456789',
            creditCard: faker.finance.creditCardNumber(),
            date: faker.date.recent().toString(),
            hour: faker.time.recent().toString(),
        };

        await supertest(app).post('/store-info').send(infos);
        const result = await getRepository(Transaction).find();

        expect(result.length !== 0).toBe(true);
    });
});

describe('GET to /store-info', () => {
    it('body must contain an array of object', async () => {
        const infos: Infos = {
            ownerName: faker.name.firstName(),
            storeName: faker.company.companyName(),
            typeId: faker.datatype.number(8),
            value: faker.datatype.number(),
            cpf: '0123456789',
            creditCard: faker.finance.creditCardNumber(),
            date: faker.date.recent().toString(),
            hour: faker.time.recent().toString(),
        };

        await supertest(app).post('/store-info').send(infos);

        const response = await supertest(app).get('/store-info');
        expect(response.body.length !== 0).toBe(true);
    });
});


