import Head from 'next/head'
import { FC } from 'react'
import Navigation from './Navigation'

interface GuestLayoutProps {
  title?: string
}

const GuestLayout: FC<GuestLayoutProps> = ({ children, title }) => {
  const titleTemplate = title ? `${title} – Fork & Spoon` : 'Fork & Spoon'

  return (
    <div className="flex flex-col w-screen min-h-screen overflow-hidden">
      <Head>
        <title>{titleTemplate}</title>
      </Head>

      <Navigation />

      <main>{children}</main>
    </div>
  )
}

export default GuestLayout
