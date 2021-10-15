import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import Logo from '../components/Logo'

const Landing: FC = () => {
  return (
    <>
      <Head>
        <title>Fork &amp; Spoon</title>
        <meta
          name="description"
          content="Eliminate your food indecisiveness, save and share recipes, and more."
        />
      </Head>

      <main className="grid w-screen min-h-screen place-items-center">
        <Link href="/">
          <a className="flex items-center pr-4 ml-4 space-x-4 text-2xl font-bold focus:outline-none focus-visible:ring-4 rounded-xl focus-visible:ring-gray-500 focus-visible:ring-opacity-50 focus-visible:ring-offset-8 focus-visible:ring-offset-gray-100">
            <span className="inline-flex items-center justify-center p-4 bg-white shadow-xl rounded-xl">
              <Logo className="w-12 h-12 text-gray-700" />
            </span>

            <div className="flex flex-col items-start space-y-1">
              <span>Fork &amp; Spoon</span>
              <span className="px-3 py-1 text-xs text-gray-700 uppercase bg-gray-200 rounded-full">
                Coming Soon
              </span>
            </div>
          </a>
        </Link>
      </main>
    </>
  )
}

export default Landing
