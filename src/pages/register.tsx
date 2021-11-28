import { UserAddIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { useAuth } from '../hooks/useAuth'
import AuthForm from '../layouts/guest/AuthForm'
import GuestLayout from '../layouts/guest/Layout'

const Register: NextPage = () => {
  const { register } = useAuth({ middleware: 'guest' })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  return (
    <GuestLayout title="Register">
      <AuthForm
        onSubmit={() =>
          register({ name, email, password, password_confirmation, setErrors })
        }
      >
        <Input
          id="name"
          label="Name"
          type="text"
          handleInput={setName}
          value={name}
          autoComplete="name"
          required
          autoFocus
        />

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

        <Input
          id="password_confirmation"
          label="Confirm Password"
          type="password"
          handleInput={setPasswordConfirmation}
          value={password_confirmation}
          autoComplete="new-password"
          required
        />

        <Button
          className="!mt-4"
          block
          variant="secondary"
          icon={(cn) => <UserAddIcon className={cn} />}
        >
          Register
        </Button>
      </AuthForm>
    </GuestLayout>
  )
}

export default Register
