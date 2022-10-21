"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/healthcheck", (_, res) => res.sendStatus(200));
//rutas
exports.default = router;
