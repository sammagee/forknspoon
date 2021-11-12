import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import useSWR from 'swr'
import axios from '../lib/axios'
import { Error } from '../types/Error'
import { Response } from '../types/Response'
import { User } from '../types/User'

export const useAuth = ({ middleware }: { middleware?: string } = {}) => {
  const router = useRouter()

  const {
    data: user,
    error,
    mutate,
  } = useSWR('/api/user', () =>
    axios
      .get('/api/user')
      .then((res: Response<User>) => res.data)
      .catch((error: Error) => {
        if (error.response.status !== 409) throw error

        router.push('/verify-email')
      })
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const register = async ({
    setErrors,
    ...props
  }: {
    setErrors(errors: string[]): void
  }) => {
    await csrf()

    axios
      .post('/register', props)
      .catch((error: Error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors))
      })
      .then(() => mutate())
  }

  const login = async ({
    setErrors,
    ...props
  }: {
    setErrors(errors: string[]): void
  }) => {
    await csrf()

    axios
      .post('/login', props)
      .catch((error: Error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors))
      })
      .then(() => mutate())
  }

  const forgotPassword = async ({
    setErrors,
    setStatus,
    email,
  }: {
    setErrors(errors: string[]): void
    setStatus(status: string): void
    email: string
  }) => {
    await csrf()

    axios
      .post('/forgot-password', { email })
      .catch((error: Error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors))
      })
      .then((response) => setStatus(response?.data.status))
  }

  const resetPassword = async ({
    setErrors,
    setStatus,
    ...props
  }: {
    setErrors(errors: string[]): void
    setStatus(status: string): void
  }) => {
    await csrf()

    axios
      .post('/reset-password', { token: router.query.token, ...props })
      .catch((error: Error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors))
      })
      .then((response) => setStatus(response?.data.status))
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
    if (middleware === 'auth' && error) logout()
  }, [error]) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isLoggedIn: !!user,
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}
