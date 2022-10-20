import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import Mensaje from "./mensajeJson";
const ValidateHelperZod =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
        //valida el esquema y devuelve los datos
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
      });
      next();
    } catch (error: any) {
      return Mensaje(res, 400, false, error.errors)
    }
  };

export default ValidateHelperZod;
