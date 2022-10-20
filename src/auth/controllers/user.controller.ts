import { Request, Response } from "express"
import Mensaje from "../../global/helpers/mensajeJson"
export const createUserController = async (req: Request, res: Response) => {
    return Mensaje(res, 200, true, "yea")
}