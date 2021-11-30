import { DocumentTextIcon } from '@heroicons/react/outline'
import { LogoutIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { useMedia } from 'react-use'
import AnchorIconButton from '../../components/AnchorIconButton'
import IconButton from '../../components/IconButton'
import Logo from '../../components/Logo'
import Menu, { MenuItem } from '../../components/Menu'
import { useAuth } from '../../hooks/useAuth'

const Navigation: FC = () => {
  const { logout, user } = useAuth()
  const isLg = useMedia('(min-width: 1024px)')

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="flex items-center justify-between w-full lg:w-auto p-4 bg-gray-100 standalone:border-t-[2.75rem] standalone:border-gray-800 lg:bg-gray-200 dark:bg-gray-800 lg:dark:bg-gray-700 lg:h-screen lg:flex-col">
        <div className="flex items-center space-x-3 lg:space-x-0 lg:space-y-3 lg:flex-col">
          <AnchorIconButton href="/" variant="secondary">
            <Logo className="w-6 h-6" />
          </AnchorIconButton>

          <AnchorIconButton
            href="/saved"
            icon={(cn) => <DocumentTextIcon className={cn} />}
            variant="tertiary"
          />
        </div>

        <div className="flex items-center justify-end space-x-2 lg:space-x-0 lg:space-y-3 lg:flex-col">
          <Menu
            button={
              <IconButton variant="secondary">
                <span className="font-semibold tracking-wide uppercase">
                  {user?.initials}
                </span>
              </IconButton>
            }
            placement={isLg ? 'right-end' : 'bottom-end'}
          >
            <MenuItem onClick={() => logout()}>
              <span>Logout</span>

              <LogoutIcon className="w-4 h-4" />
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
