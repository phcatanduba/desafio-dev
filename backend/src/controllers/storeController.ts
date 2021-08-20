import { Request, Response } from 'express';
import Infos from '../interfaces/InfosInterface';

import * as storeService from '../services/storeService';

export function save(req: Request, res: Response) {
    const infos = req.body as Infos;
    try {
        const isValid = storeService.isValid(infos);
        if (isValid) {
            storeService.save(infos);
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
