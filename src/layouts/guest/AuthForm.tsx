import { FC, FormEvent } from 'react'

interface AuthFormProps {
  onSubmit(): void
}

const AuthForm: FC<AuthFormProps> = ({ children, onSubmit }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    onSubmit()
  }

  return (
    <div className="grid py-32 place-items-center">
      <form className="w-full max-w-sm space-y-2" onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  )
}

export default AuthForm
