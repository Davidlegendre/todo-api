import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
  pre,
  DocumentType,
} from "@typegoose/typegoose";
import { hash, verify } from "argon2";
import { nanoid } from "nanoid";
import log from "../../global/utils/logger";

//modifica un password si este ha sido modificado lo pone encriptado
@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const HS = await hash(this.password);
  this.password = HS;
  return;
})

//opciones normales de mongodb
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})

//clase o esquema de mongodb pero con typegoose
export class User {
  @prop({ required: true, unique: true, lowercase: true })
  email: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true, minlength: 8 })
  password: string;

  @prop({ required: true, default: () => nanoid() })
  verificationCode: string;

  @prop()
  passwordResetCode: string | null;

  @prop({ default: false })
  verified: boolean;

  @prop({ default: true })
  isActive: boolean;

  @prop({ type: URL })
  img: URL | null;

  //comparador de password
  async validatePassword(this: DocumentType<User>, candidatePassword: string) {
    try {
      return await verify(this.password, candidatePassword);
    } catch (error: any) {
      log(error.errors, true);
      return false;
    }
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
