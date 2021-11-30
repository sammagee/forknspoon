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

        <meta
          name="theme-color"
          content="#18181B"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#FAFAFA"
          media="(prefers-color-scheme: light)"
        />
      </Head>

      <Navigation />

      <main className="w-full px-8 mx-auto max-w-7xl mt-32 standalone:mt-[10.75rem]">
        {children}
      </main>
    </div>
  )
}

export default GuestLayout
