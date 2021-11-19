import { Request } from '../Request'

export interface LoginRequest extends Request {
  email: string
  password: string
}
