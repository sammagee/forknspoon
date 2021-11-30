import { PaperAirplaneIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import type { NextPage } from 'next'
import { useState } from 'react'
import Button from '../components/Button'
import InfoBlock from '../components/InfoBlock'
import Input from '../components/Input'
import { useAuth } from '../hooks/useAuth'
import AuthForm from '../layouts/guest/AuthForm'
import GuestLayout from '../layouts/guest/Layout'

const ForgotPassword: NextPage = () => {
  const { forgotPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState<string>('')
  const [errors, setErrors] = useState<string[] | null>(null)
  const [status, setStatus] = useState<string | null>(null)

  return (
    <GuestLayout title="Forgot Password">
      <AuthForm
        errors={errors}
        status={status}
        onSubmit={() => forgotPassword({ email, setErrors, setStatus })}
      >
        <InfoBlock>
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </InfoBlock>

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

        <Button
          className="!mt-4"
          block
          icon={(cn) => (
            <PaperAirplaneIcon className={clsx('transform rotate-90', cn)} />
          )}
        >
          Email Password Reset Link
        </Button>
      </AuthForm>
    </GuestLayout>
  )
}

export default ForgotPassword
