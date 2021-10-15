import { FC } from 'react'
import AnchorIconButton from '../components/AnchorIconButton'
import IconButton from '../components/IconButton'
import Logo from '../components/Logo'

const Navigation: FC = () => {
  return (
    <nav className="flex flex-col items-center justify-between w-20 py-4 bg-gray-200">
      <div className="flex flex-col items-center space-y-2">
        <AnchorIconButton href="/" flat variant="secondary">
          <Logo className="w-6 h-6" />
        </AnchorIconButton>

        <AnchorIconButton href="/saved" name="star" variant="tertiary" flat />
      </div>

      <div className="flex justify-end">
        <IconButton flat variant="secondary">
          <span className="font-semibold tracking-wide uppercase">SM</span>
        </IconButton>
      </div>
    </nav>
  )
}

export default Navigation
