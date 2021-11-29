import { FC } from 'react'
import AnchorButton from '../../components/AnchorButton'
import AnchorIconButton from '../../components/AnchorIconButton'
import Logo from '../../components/Logo'

const Navigation: FC = () => {
  return (
    <nav className="flex items-center justify-between w-full h-48 px-4 mx-auto max-w-7xl">
      <div className="flex items-center space-x-2">
        <AnchorIconButton
          href="/"
          variant="secondary"
          className="w-20 h-20 rounded-2xl"
          icon={<Logo className="w-10 h-10" />}
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
