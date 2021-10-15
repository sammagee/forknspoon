import { FC } from 'react'
import Navigation from './Navigation'

const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex w-screen min-h-screen">
      <Navigation />

      <main className="flex flex-1">{children}</main>
    </div>
  )
}

export default AppLayout
