import { Request, Response } from "express"
import Mensaje from "../../global/helpers/mensajeJson";
import log from "../../global/utils/logger";
import { User } from '../models/user.model';

export const loginController = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body
        res.status(200).json({
            email: email
        });
        } catch (error: any) {
        log(error, true);
         Mensaje(res, 400, false, error.errors)
    }
}

export const headercontroller = (req: Request, res: Response) => {
    try {
        const header = req.headers
        res.status(200).json({
            header
        })
    } catch (error: any) {
        log(error, true);
         Mensaje(res, 400, false, error)
    }
}