import { UserAddIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import AuthForm from '../../layouts/guest/AuthForm'
import GuestLayout from '../../layouts/guest/Layout'

const PasswordReset: NextPage = () => {
  const router = useRouter()

  const { resetPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState<string[] | null>(null)
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    setEmail((router.query.email as string) || '')
  }, [router.query.email])

  return (
    <GuestLayout title="Reset Password">
      <AuthForm
        errors={errors}
        status={status}
        onSubmit={() =>
          resetPassword({
            email,
            password,
            password_confirmation,
            setErrors,
            setStatus,
          })
        }
      >
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
          icon={(cn) => <UserAddIcon className={cn} />}
        >
          Reset Password
        </Button>
      </AuthForm>
    </GuestLayout>
  )
}

export default PasswordReset
