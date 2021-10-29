import clsx from 'clsx'
import { FC, ReactElement } from 'react'
import { buttonColors, ButtonProps, ButtonVariant } from './Button'
import Icon, { IconName } from './Icon'

export type IconButtonProps = Omit<ButtonProps, 'children'> & {
  children?: ReactElement[] | ReactElement
  iconClassName?: string
  name?: IconName
}

export const iconButtonClasses =
  'inline-flex items-center justify-center h-12 w-12 transition duration-150 ease-in-out origin-bottom transform hover:scale-102 active:scale-98 rounded-xl focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50'

const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  iconClassName,
  flat = false,
  name,
  variant = ButtonVariant.Primary,
}) => {
  return (
    <button
      className={clsx(
        iconButtonClasses,
        buttonColors(variant),
        !flat && 'shadow-sm hover:shadow-md active:shadow-sm',
        className
      )}
    >
      {name ? (
        <Icon className={clsx('w-6 h-6', iconClassName)} name={name} />
      ) : (
        children
      )}
    </button>
  )
}

export default IconButton
