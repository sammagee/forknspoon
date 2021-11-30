import { Request } from '../Request'

export interface ForgotPasswordRequest extends Request {
  email: string
  setStatus(status: string | null): void
}
