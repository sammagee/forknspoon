import Head from 'next/head'
import { FC } from 'react'
import GuestLayout from '../layouts/guest/Layout'

const Landing: FC = () => {
  return (
    <GuestLayout>
      <Head>
        <title>Fork &amp; Spoon</title>
        <meta
          name="description"
          content="Eliminate your food indecisiveness, save and share recipes, and more."
        />
      </Head>

      <section className="grid py-32 md:py-48 lg:py-64 place-items-center">
        <div className="flex flex-col items-center space-y-3">
          <span className="px-3 py-1 text-xs font-semibold text-gray-700 uppercase bg-gray-200 rounded-full dark:text-gray-500 dark:bg-gray-800">
            Coming Soon
          </span>
          <h1 className="font-bold text-gray-900 text-7xl dark:text-white">
            Fork &amp; Spoon
          </h1>
          <h2 className="text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-600">
            Eliminate food <br /> indecisiveness.
          </h2>
        </div>
      </section>
    </GuestLayout>
  )
}

export default Landing
