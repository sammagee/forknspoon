import { InputHTMLAttributes, VFC } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  description?: string
  handleInput(value: string): void
  label?: string
}

const Input: VFC<InputProps> = ({
  description,
  handleInput,
  label,
  ...inputProps
}) => {
  return (
    <div>
      {label && (
        <label
          className="mx-3 text-sm text-gray-600 dark:text-gray-400"
          htmlFor={inputProps.id}
        >
          {label}
        </label>
      )}
      {description && (
        <p className="mx-3 text-xs text-gray-400 dark:text-gray-500">
          {description}
        </p>
      )}

      <div className="relative mt-1">
        <input
          className="w-full h-12 px-5 text-gray-900 placeholder-gray-500 transition-shadow ease-in-out bg-gray-300 rounded-lg dark:text-white bg-opacity-20 dark:bg-black dark:bg-opacity-20 ring-1 ring-black ring-opacity-5 dark:ring-opacity-25 focus:outline-none focus:ring-blue-500 duration-250"
          onInput={(event) => {
            handleInput((event.target as HTMLInputElement).value)
          }}
          {...inputProps}
        />
      </div>
    </div>
  )
}

export default Input
