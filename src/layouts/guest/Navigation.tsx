import { FC } from 'react'
import AnchorButton from '../../components/AnchorButton'
import AnchorIconButton from '../../components/AnchorIconButton'
import Logo from '../../components/Logo'

const Navigation: FC = () => {
  return (
    <nav className="flex items-center justify-between w-full h-32 px-8 mx-auto md:h-48 max-w-7xl">
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
  )
}

export default Navigation
