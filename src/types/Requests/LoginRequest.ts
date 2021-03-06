import { Request } from '../Request'

export interface LoginRequest extends Request {
  email: string
  password: string
  remember?: boolean
  setStatus(status: string | null): void
}
