import { Request } from '../Request'

export interface RegisterRequest extends Request {
  name: string
  email: string
  password: string
  password_confirmation: string
}
