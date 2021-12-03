import { FC } from 'react'
import AnchorButton from '../../components/AnchorButton'
import AnchorIconButton from '../../components/AnchorIconButton'
import Logo from '../../components/Logo'

const Navigation: FC = () => {
  return (
    <header className="fixed top-0 z-40 w-full">
      <nav className="relative flex items-center justify-between w-full p-8 mx-auto lg:py-16 max-w-7xl standalone:border-t-[2.75rem] standalone:border-gray-900 bg-gray-50 dark:bg-gray-900">
        <div className="absolute w-full h-16 top-full bg-gradient-to-b from-gray-50 dark:from-gray-900" />

        <div className="flex items-center space-x-2">
          <AnchorIconButton
            href="/"
            variant="secondary"
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl"
            icon={<Logo className="w-7 h-7 md:w-10 md:h-10" />}
          />
        </div>

        <div className="flex items-center justify-end space-x-2">
          <AnchorButton href="/login" variant="tertiary">
            Login
          </AnchorButton>

          <AnchorButton href="/register" variant="secondary">
            Register
          </AnchorButton>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
