import { Router } from "express";
import { Request, Response } from "express";
import ValidateHelperZod from "../../global/helpers/validateHelperZod";
import { loginUserValidate, validateHeader } from '../validators/user.validator';
import { loginController, headercontroller } from '../controllers/auth.controller';

const router = Router();
router.get("/hola", (req: Request, res: Response)=> {
res.status(200).json({"msg": "mundo"})

})

router.post("/login", ValidateHelperZod(loginUserValidate), loginController);

router.post("/a", ValidateHelperZod(validateHeader), headercontroller);

export default router;
