import { Response } from "express";


function Mensaje(res: Response, status: number, ok: boolean, data: object | null | string){
  return res.status(status).json({status, ok, data})

}

export default Mensaje
