import { PaperAirplaneIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import type { NextPage } from 'next'
import { useState } from 'react'
import Button from '../components/Button'
import InfoBlock from '../components/InfoBlock'
import { useAuth } from '../hooks/useAuth'
import AuthForm from '../layouts/guest/AuthForm'
import GuestLayout from '../layouts/guest/Layout'

const VerifyEmail: NextPage = () => {
  const { logout, resendEmailVerification } = useAuth({ middleware: 'auth' })

  const [status, setStatus] = useState<string | null>(null)

  return (
    <GuestLayout title="Verify Email">
      <AuthForm onSubmit={() => resendEmailVerification({ setStatus })}>
        <InfoBlock>
          Thanks for signing up! Before getting started, could you verify your
          email address by clicking on the link we just emailed to you? If you
          didn&apos;t receive the email, we will gladly send you another.
          <br />
          <br />
          <button
            className="font-medium text-gray-500 transition-opacity duration-150 ease-in-out hover:opacity-75 focus:outline-none focus-visible:ring"
            type="button"
            onClick={logout}
          >
            Logout?
          </button>
        </InfoBlock>

        {status === 'verification-link-sent' && (
          <InfoBlock intent="success">
            A new verification link has been sent to the email address you
            provided during registration.
          </InfoBlock>
        )}

        <Button
          className="!mt-4"
          block
          icon={(cn) => (
            <PaperAirplaneIcon className={clsx('transform rotate-90', cn)} />
          )}
        >
          Resend Verification Email
        </Button>
      </AuthForm>
    </GuestLayout>
  )
}

export default VerifyEmail
