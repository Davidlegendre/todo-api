import {string, object} from 'zod'

export const createTodoValidate = object({
    body: object({
        titulo: string({required_error: "Titulo es requerido"}).min(7, "titulo debe tener al menos 7 caracteres"),
        contenido: string({required_error: "Contenido es requerido"}).min(7, "Contenido debe tener al menos 7 caracteres")
    })
})

/*
@prop({required: true, minlength: 7})
    titulo: string

    @prop({required: true, minlength: 7})
    contenido: string
*/