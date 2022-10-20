import { createUserValidate } from '../validators/user.validator';
import { TypeOf } from 'zod';
type CreateUserType = TypeOf<typeof createUserValidate>

export default CreateUserType