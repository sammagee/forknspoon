import { FC } from 'react'
import AnchorIconButton from '../components/AnchorIconButton'
import IconButton from '../components/IconButton'
import Logo from '../components/Logo'

const Navigation: FC = () => {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-4 bg-gray-100 lg:bg-gray-200 dark:bg-gray-800 lg:dark:bg-gray-700 lg:py-4 lg:h-screen lg:w-20 lg:flex-col">
      <div className="flex items-center space-x-2 lg:space-x-0 lg:space-y-2 lg:flex-col">
        <AnchorIconButton href="/" flat variant="secondary">
          <Logo className="w-6 h-6" />
        </AnchorIconButton>

        <AnchorIconButton href="/saved" name="star" variant="tertiary" flat />
      </div>

      <div className="flex items-center justify-end space-x-2 lg:space-x-0 lg:space-y-2 lg:flex-col">
        <IconButton name="preferences" variant="tertiary" flat />

        <IconButton flat variant="secondary">
          <span className="font-semibold tracking-wide uppercase">SM</span>
        </IconButton>
      </div>
    </nav>
  )
}

export default Navigation
