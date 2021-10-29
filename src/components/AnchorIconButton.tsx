import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { FC, HTMLAttributes } from 'react'
import { buttonColors, ButtonProps, ButtonVariant } from './Button'
import Icon from './Icon'
import { iconButtonClasses, IconButtonProps } from './IconButton'

type AnchorIconButtonProps = Omit<ButtonProps, 'children'> &
  IconButtonProps &
  LinkProps &
  HTMLAttributes<HTMLAnchorElement>

const AnchorIconButton: FC<AnchorIconButtonProps> = ({
  children,
  className,
  iconClassName,
  flat = false,
  href,
  name,
  variant = ButtonVariant.Primary,
  ...anchorProps
}) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          iconButtonClasses,
          buttonColors(variant),
          !flat && 'shadow-sm hover:shadow-md active:shadow-sm',
          className
        )}
        {...anchorProps}
      >
        {name ? (
          <Icon className={clsx('w-6 h-6', iconClassName)} name={name} />
        ) : (
          children
        )}
      </a>
    </Link>
  )
}

export default AnchorIconButton
