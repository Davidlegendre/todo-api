"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mensajeJson_1 = __importDefault(require("./mensajeJson"));
const ValidateHelperZod = (schema) => (req, res, next) => {
    try {
        //valida el esquema y devuelve los datos
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
            headers: req.headers,
        });
        next();
    }
    catch (error) {
        return (0, mensajeJson_1.default)(res, 400, false, error.errors);
    }
};
exports.default = ValidateHelperZod;
