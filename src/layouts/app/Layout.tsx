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

        <meta
          name="theme-color"
          content="#27272A"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#F4F4F5"
          media="(prefers-color-scheme: light)"
        />
      </Head>

      <Navigation />

      <main className="flex flex-1 mt-20 lg:mt-0 lg:ml-20 standalone:mt-[7.75rem]">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
