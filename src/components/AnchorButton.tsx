import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  return (
    <Link href={href}>
      <a
        className={clsx(buttonClasses, buttonColors(variant), className)}
        {...anchorProps}
      >
        <div className="flex items-center justify-between flex-1">
          <span>{children}</span>

          {typeof icon === 'function' ? icon('w-4 h-4') : icon}

          {router.pathname === href && (
            <span className="absolute inset-x-0 inline-flex justify-center w-full top-full">
              <span className="w-4 h-0.5 inline-block rounded-full bg-brand-500 shadow-glow" />
            </span>
          )}
        </div>
      </a>
    </Link>
  )
}

export default AnchorButton
