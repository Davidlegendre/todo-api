import { prop } from "@typegoose/typegoose"
import { User } from "../../auth/models/user.model"

export class Todo{
    @prop({required: true, minlength: 7})
    titulo: string

    @prop({required: true, minlength: 7})
    contenido: string

    @prop({required: true, ref: User})
    user: string
}