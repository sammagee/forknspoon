import { LoginIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { useAuth } from '../hooks/useAuth'
import AuthForm from '../layouts/guest/AuthForm'
import GuestLayout from '../layouts/guest/Layout'

const Register: NextPage = () => {
  const { login } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  return (
    <GuestLayout title="Login">
      <AuthForm onSubmit={() => login({ email, password, setErrors })}>
        <Input
          id="email"
          label="Email"
          type="email"
          handleInput={setEmail}
          value={email}
          autoComplete="email"
          required
        />

        <Input
          id="password"
          label="Password"
          type="password"
          handleInput={setPassword}
          value={password}
          autoComplete="new-password"
          required
        />

        <Button
          className="!mt-4"
          block
          variant="secondary"
          icon={(cn) => <LoginIcon className={cn} />}
        >
          Login
        </Button>
      </AuthForm>
    </GuestLayout>
  )
}

export default Register
