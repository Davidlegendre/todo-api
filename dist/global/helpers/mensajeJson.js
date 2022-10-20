"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Mensaje(res, status, ok, data) {
    return res.status(status).json({ status, ok, data });
}
exports.default = Mensaje;
