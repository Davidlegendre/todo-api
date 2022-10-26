import { object, string } from "zod";

//para validar con zod se pone como objeto y para body es simplemente colocar body, lo mismo para todos: headers, params
export const createUserValidate = object({
  body: object({
    email: string({
      required_error: "Email es requerido",
    }).email("Email no valido"),
    name: string({ required_error: "el nombre es requerido" }),
    password: string({ required_error: "password es requerido" }).min(
      8,
      "el password debe tener minimo 8 caracteres"
    ),
    passwordConfirmation: string({
      required_error: "confirmacion del password es requerido",
    }),
    //compara campos
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "las contraseñas no coinciden",
    path: ["passwordConfirmation"],
  }),
});

export const loginUserValidate = object({
  body: object({
    email: string({required_error: "El email es requerido"}).email("Email no valido"),
    password: string({required_error: "El password es requerido"})
  })
})

export const validateHeader = object({
  headers: object({
    authorization: string({required_error: "Authorization requerida"})
  }).refine((data) => data.authorization.split(" ")[0] === "Bearer" && data.authorization.split(" ").length > 1,{
    message: "Authorization invalida"
  }),
})