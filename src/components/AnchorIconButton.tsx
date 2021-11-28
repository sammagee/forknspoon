import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { FC, HTMLAttributes } from 'react'
import { buttonColors, ButtonVariant } from './Button'
import { iconButtonClasses, IconButtonProps } from './IconButton'

type AnchorIconButtonProps = IconButtonProps &
  LinkProps &
  HTMLAttributes<HTMLAnchorElement>

const AnchorIconButton: FC<AnchorIconButtonProps> = ({
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
          iconButtonClasses,
          buttonColors(variant),
          !flat && 'shadow-sm hover:shadow-md active:shadow-sm',
          className
        )}
        {...anchorProps}
      >
        {typeof icon === 'function' ? icon('w-6 h-6') : icon ? icon : children}
      </a>
    </Link>
  )
}

export default AnchorIconButton
