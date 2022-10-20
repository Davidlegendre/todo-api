import { Router, Request, Response } from "express";
import ValidateHelperZod from '../../global/helpers/validateHelperZod';
import { createUserController } from '../controllers/user.controller';
import { createUserValidate } from '../validators/user.validator';

const router = Router();
//
router.post("/createUser",  ValidateHelperZod(createUserValidate), createUserController)

export default router;