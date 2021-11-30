import { Request } from '../Request'

export interface ResetPasswordRequest extends Request {
  email: string
  password: string
  password_confirmation: string
  setStatus(status: string | null): void
}
