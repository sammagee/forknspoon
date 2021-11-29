import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { HTMLAttributes, VFC } from 'react'
import {
  buttonClasses,
  buttonColors,
  ButtonProps,
  ButtonVariant,
} from './Button'

type AnchorButtonProps = ButtonProps &
  LinkProps &
  HTMLAttributes<HTMLAnchorElement>

const AnchorButton: VFC<AnchorButtonProps> = ({
  children,
  className,
  href,
  icon,
  variant = ButtonVariant.Primary,
  ...anchorProps
}) => {
  return (
    <Link href={href}>
      <a
        className={clsx(buttonClasses, buttonColors(variant), className)}
        {...anchorProps}
      >
        <div className="flex items-center justify-between flex-1">
          <span>{children}</span>

          {typeof icon === 'function' ? icon('w-4 h-4') : icon}
        </div>
      </a>
    </Link>
  )
}

export default AnchorButton
