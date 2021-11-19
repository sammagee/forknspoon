import { FC } from 'react'
import Navigation from './Navigation'

const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-hidden lg:flex-row">
      <Navigation />

      <main className="flex flex-1">{children}</main>
    </div>
  )
}

export default AppLayout
