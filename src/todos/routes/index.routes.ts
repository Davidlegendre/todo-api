import {Router} from "express";

const router = Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

//rutas

export default router;