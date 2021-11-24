import Head from 'next/head'
import { FC } from 'react'
import Navigation from './Navigation'

interface AppLayoutProps {
  title?: string
}

const AppLayout: FC<AppLayoutProps> = ({ children, title }) => {
  const titleTemplate = title ? `${title} – Fork & Spoon` : 'Fork & Spoon'

  return (
    <div className="flex flex-col w-screen min-h-screen overflow-hidden lg:flex-row">
      <Head>
        <title>{titleTemplate}</title>
      </Head>

      <Navigation />

      <main className="flex flex-1">{children}</main>
    </div>
  )
}

export default AppLayout
