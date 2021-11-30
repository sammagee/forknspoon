import { FC, FormEvent } from 'react'
import InfoBlock from '../../components/InfoBlock'

interface AuthFormProps {
  errors?: string[] | null
  status?: string | null
  onSubmit(): void
}

const AuthForm: FC<AuthFormProps> = ({
  children,
  errors,
  status,
  onSubmit,
}) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    onSubmit()
  }

  return (
    <div className="grid py-32 place-items-center">
      <form className="w-full max-w-sm space-y-2" onSubmit={handleSubmit}>
        {status && <InfoBlock intent="success">{status}</InfoBlock>}

        {errors && errors.length > 0 && (
          <InfoBlock intent="danger">
            <div className="font-medium">Whoops! Something went wrong.</div>

            <ul className="mt-3 text-sm list-disc list-inside">
              {errors?.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </InfoBlock>
        )}

        {children}
      </form>
    </div>
  )
}

export default AuthForm
