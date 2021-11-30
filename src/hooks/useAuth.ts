import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import useSWR from 'swr'
import axios from '../lib/axios'
import { Error } from '../types/Error'
import { ForgotPasswordRequest } from '../types/Requests/ForgotPasswordRequest'
import { LoginRequest } from '../types/Requests/LoginRequest'
import { RegisterRequest } from '../types/Requests/RegisterRequest'
import { ResetPasswordRequest } from '../types/Requests/ResetPasswordRequest'
import { Response } from '../types/Response'
import { User } from '../types/User'

export const useAuth = ({
  middleware,
}: { middleware?: 'auth' | 'guest' } = {}) => {
  const router = useRouter()

  const {
    data: user,
    error,
    mutate,
  } = useSWR('/user', () =>
    axios
      .get('/user')
      .then((res: Response<User>) => res.data)
      .catch((error: Error) => {
        if (error.response.status !== 403) throw error

        router.push('/verify-email')
      })
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const register = async ({ setErrors, ...props }: RegisterRequest) => {
    await csrf()

    setErrors(null)

    axios
      .post('/register', props)
      .then(() => mutate())
      .catch((error: Error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const login = async ({ setErrors, setStatus, ...props }: LoginRequest) => {
    await csrf()

    setStatus(null)
    setErrors(null)

    axios
      .post('/login', props)
      .then(() => mutate())
      .catch((error: Error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const forgotPassword = async ({
    setErrors,
    setStatus,
    email,
  }: ForgotPasswordRequest) => {
    await csrf()

    setStatus(null)
    setErrors(null)

    axios
      .post('/forgot-password', { email })
      .then((response) => setStatus(response.data.status))
      .catch((error: Error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const resetPassword = async ({
    setErrors,
    setStatus,
    ...props
  }: ResetPasswordRequest) => {
    await csrf()

    axios
      .post('/reset-password', { token: router.query.token, ...props })
      .then((response) =>
        router.push(
          `/login?reset=${Buffer.from(response.data.status, 'utf8').toString(
            'base64'
          )}`
        )
      )
      .catch((error: Error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors))
      })
  }

  const resendEmailVerification = ({
    setStatus,
  }: {
    setStatus(status: string): void
  }) => {
    axios
      .post('/email/verification-notification')
      .then((response) => setStatus(response.data.status))
  }

  const logout = () => {
    axios.post('/logout').then(() => {
      mutate()

      window.location.pathname = '/login'
    })
  }

  useEffect(() => {
    if (middleware === 'guest' && user) router.push('/')
    if (middleware === 'auth' && error) logout()
  }, [error]) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isLoggedIn: !!user,
    error,
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}
