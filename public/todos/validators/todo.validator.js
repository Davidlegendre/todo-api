"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoValidate = void 0;
const zod_1 = require("zod");
exports.createTodoValidate = (0, zod_1.object)({
    body: (0, zod_1.object)({
        titulo: (0, zod_1.string)({ required_error: "Titulo es requerido" }).min(7, "titulo debe tener al menos 7 caracteres"),
        contenido: (0, zod_1.string)({ required_error: "Contenido es requerido" }).min(7, "Contenido debe tener al menos 7 caracteres")
    })
});
/*
@prop({required: true, minlength: 7})
    titulo: string

    @prop({required: true, minlength: 7})
    contenido: string
*/ 
