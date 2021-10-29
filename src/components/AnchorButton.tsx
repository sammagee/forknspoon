import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { HTMLAttributes, VFC } from 'react'
import {
  buttonClasses,
  buttonColors,
  ButtonProps,
  ButtonVariant,
} from './Button'
import Icon from './Icon'

type AnchorButtonProps = ButtonProps &
  LinkProps &
  HTMLAttributes<HTMLAnchorElement>

const AnchorButton: VFC<AnchorButtonProps> = ({
  children,
  className,
  flat = false,
  href,
  icon,
  variant = ButtonVariant.Primary,
  ...anchorProps
}) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          buttonClasses,
          buttonColors(variant),
          !flat && 'shadow-sm hover:shadow-md active:shadow-sm',
          className
        )}
        {...anchorProps}
      >
        <div className="flex items-center justify-between flex-1">
          <span>{children}</span>

          {icon && <Icon className="w-4 h-4" name={icon} />}
        </div>
      </a>
    </Link>
  )
}

export default AnchorButton
