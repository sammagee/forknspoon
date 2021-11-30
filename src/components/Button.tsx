import clsx from 'clsx'
import { FC, HTMLAttributes, ReactChild, ReactNode } from 'react'

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

type ButtonVariantType = ButtonVariant | `${ButtonVariant}`

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  block?: boolean
  className?: string
  children: ReactChild[] | ReactChild | string
  disabled?: boolean
  icon?: ((className: string) => ReactNode) | ReactNode
  variant?: ButtonVariantType
}

export const buttonClasses =
  'inline-flex items-center select-none relative justify-center h-12 px-5 font-medium transition duration-150 ease-in-out origin-bottom transform hover:scale-102 active:scale-98 rounded-xl focus:outline-none focus:ring'

export const buttonColors = (variant: ButtonVariantType) =>
  ({
    [ButtonVariant.Primary]:
      'text-white bg-black active:opacity-75 hover:opacity-75',
    [ButtonVariant.Secondary]:
      'text-gray-900 dark:text-white text-opacity-50 dark:text-opacity-50 bg-gray-900 bg-opacity-3 dark:bg-black dark:bg-opacity-20 hover:bg-opacity-5 dark:hover:bg-opacity-25 hover:text-opacity-75 dark:hover:text-opacity-75',
    [ButtonVariant.Tertiary]:
      'text-gray-900 dark:text-white text-opacity-50 dark:text-opacity-50 bg-gray-900 bg-opacity-0 dark:bg-black dark:bg-opacity-0 hover:bg-opacity-3 dark:hover:bg-opacity-20 hover:text-opacity-75 dark:hover:text-opacity-75',
  }[variant])

const Button: FC<ButtonProps> = ({
  block,
  className,
  children,
  disabled,
  icon,
  variant = ButtonVariant.Primary,
  ...buttonProps
}) => {
  return (
    <button
      className={clsx(
        buttonClasses,
        buttonColors(variant),
        block && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...buttonProps}
    >
      <div className="flex items-center justify-between flex-1">
        <span>{children}</span>

        {typeof icon === 'function' ? icon('w-4 h-4') : icon}
      </div>
    </button>
  )
}

export default Button
