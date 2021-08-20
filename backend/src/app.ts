import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';

import * as storeController from './controllers/storeController';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/store-info', storeController.save);

app.get('/store-info', storeController.get);

export async function init() {
    await connectDatabase();
}

export default app;
