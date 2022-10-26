import { loginUserValidate } from '../validators/user.validator';
import { TypeOf } from 'zod';
type LoginUserType = TypeOf<typeof loginUserValidate>

export default LoginUserType