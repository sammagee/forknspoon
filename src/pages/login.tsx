import { LoginIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Toggle from '../components/Toggle'
import { useAuth } from '../hooks/useAuth'
import AuthForm from '../layouts/guest/AuthForm'
import GuestLayout from '../layouts/guest/Layout'

const Login: NextPage = () => {
  const router = useRouter()

  const { login } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState<string[] | null>(null)
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    if (
      router.query.reset &&
      router.query.reset.length > 0 &&
      (!errors || errors.length === 0)
    ) {
      setStatus(Buffer.from(router.query.reset as string, 'base64').toString())
    } else {
      setStatus(null)
    }
  }, [errors, router.query.reset])

  return (
    <GuestLayout title="Login">
      <AuthForm
        errors={errors}
        status={status}
        onSubmit={() =>
          login({ email, password, remember, setErrors, setStatus })
        }
      >
        <Input
          id="email"
          label="Email"
          name="email"
          type="email"
          handleInput={setEmail}
          value={email}
          autoComplete="email"
          required
          autoFocus
        />

        <Input
          id="password"
          label="Password"
          name="password"
          type="password"
          handleInput={setPassword}
          value={password}
          autoComplete="new-password"
          required
        />

        <Toggle
          label="Remember Me"
          description="Would you like to remain logged in?"
          handleChange={setRemember}
          value={remember}
        />

        <Button
          className="!mt-4"
          block
          icon={(cn) => <LoginIcon className={cn} />}
        >
          Login
        </Button>

        <div className="text-center">
          <Link href="/forgot-password">
            <a className="text-sm font-medium text-gray-500 transition-opacity duration-150 ease-in-out hover:opacity-75 focus:outline-none focus-visible:ring">
              Forgot your password?
            </a>
          </Link>
        </div>
      </AuthForm>
    </GuestLayout>
  )
}

export default Login
