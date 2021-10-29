import clsx from 'clsx'
import { FC, HTMLAttributes, ReactChild } from 'react'
import Icon, { IconName } from './Icon'

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

type ButtonVariantType = ButtonVariant | `${ButtonVariant}`

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactChild[] | ReactChild | string
  flat?: boolean
  icon?: IconName
  variant?: ButtonVariantType
}

export const buttonClasses =
  'inline-flex items-center justify-center h-12 px-5 font-medium transition duration-150 ease-in-out origin-bottom transform hover:scale-102 active:scale-98 rounded-xl focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50'

export const buttonColors = (variant: ButtonVariantType) =>
  ({
    [ButtonVariant.Primary]:
      'text-white bg-gray-900 active:opacity-75 hover:opacity-75',
    [ButtonVariant.Secondary]:
      'text-gray-900 dark:text-white text-opacity-50 dark:text-opacity-50 bg-gray-900 bg-opacity-3 dark:bg-black dark:bg-opacity-20 hover:bg-opacity-5 dark:hover:bg-opacity-25 hover:text-opacity-75 dark:hover:text-opacity-75',
    [ButtonVariant.Tertiary]:
      'text-gray-900 dark:text-white text-opacity-50 dark:text-opacity-50 bg-gray-900 bg-opacity-0 dark:bg-black dark:bg-opacity-0 hover:bg-opacity-3 dark:hover:bg-opacity-20 hover:text-opacity-75 dark:hover:text-opacity-75',
  }[variant])

const Button: FC<ButtonProps> = ({
  className,
  children,
  flat = false,
  icon,
  variant = ButtonVariant.Primary,
}) => {
  return (
    <button
      className={clsx(
        buttonClasses,
        buttonColors(variant),
        !flat && 'shadow-sm hover:shadow-md active:shadow-sm',
        className
      )}
    >
      <div className="flex items-center justify-between flex-1">
        <span>{children}</span>

        {icon && <Icon className="w-4 h-4" name={icon} />}
      </div>
    </button>
  )
}

export default Button
