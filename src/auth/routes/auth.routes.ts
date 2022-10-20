import { Router } from "express";
import { Request, Response } from "express";

const router = Router();
router.get("/hola", (req: Request, res: Response)=> {
res.status(200).json({"msg": "mundo"})

})

export default router;
