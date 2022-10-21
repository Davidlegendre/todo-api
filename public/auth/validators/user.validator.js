"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidate = void 0;
const zod_1 = require("zod");
//para validar con zod se pone como objeto y para body es simplemente colocar body, lo mismo para todos: headers, params
exports.createUserValidate = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "Email es requerido",
        }).email("Email no valido"),
        name: (0, zod_1.string)({ required_error: "el nombre es requerido" }),
        password: (0, zod_1.string)({ required_error: "password es requerido" }).min(8, "el password debe tener minimo 8 caracteres"),
        passwordConfirmation: (0, zod_1.string)({
            required_error: "confirmacion del password es requerido",
        }),
        //compara campos
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "las contraseñas no coinciden",
        path: ["passwordConfirmation"],
    }),
});
