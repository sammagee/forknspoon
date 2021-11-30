import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { FC, HTMLAttributes } from 'react'
import { buttonColors, ButtonVariant } from './Button'
import { iconButtonClasses, IconButtonProps } from './IconButton'

type AnchorIconButtonProps = IconButtonProps &
  LinkProps &
  HTMLAttributes<HTMLAnchorElement> & {
    rel?: string
    target?: string
  }

const AnchorIconButton: FC<AnchorIconButtonProps> = ({
  children,
  className,
  href,
  icon,
  rel,
  target,
  variant = ButtonVariant.Primary,
  ...anchorProps
}) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a
        className={clsx(iconButtonClasses, buttonColors(variant), className)}
        rel={rel}
        target={target}
        {...anchorProps}
      >
        {typeof icon === 'function' ? icon('w-6 h-6') : icon ? icon : children}

        {router.pathname === href && (
          <span className="absolute w-4 h-0.5 rounded-full top-full bg-brand-500 shadow-glow" />
        )}
      </a>
    </Link>
  )
}

export default AnchorIconButton
