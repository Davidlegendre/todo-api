import { Response } from "express";


function Mensaje(res: Response, status: number, ok: boolean, data: object | null){
  return res.status(status).json({status, ok, data})

}

export default Mensaje
