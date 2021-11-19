import { FC } from 'react'
import Navigation from './Navigation'

const GuestLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-hidden">
      <Navigation />

      <main>{children}</main>
    </div>
  )
}

export default GuestLayout
