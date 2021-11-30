import Head from 'next/head'
import { FC } from 'react'
import GuestLayout from '../layouts/guest/Layout'

const Landing: FC = () => {
  return (
    <GuestLayout>
      <Head>
        <title>Fork &amp; Spoon</title>
      </Head>

      <section className="grid py-32 md:py-48 lg:py-64 place-items-center">
        <div className="flex flex-col items-center">
          <span className="px-3 py-1 text-xs font-semibold text-gray-700 uppercase bg-gray-200 rounded-full dark:text-gray-500 dark:bg-gray-800">
            Coming Soon
          </span>
          <h1 className="mt-3 text-5xl font-bold text-center text-gray-900 md:text-7xl dark:text-white">
            Fork &amp; Spoon
          </h1>
          <h2 className="mt-6 text-2xl font-medium text-center text-brand-400 md:text-5xl">
            <span className="relative text-brand-700">
              <span className="absolute transform -skew-x-3 bg-brand-200 -inset-2" />
              <span className="relative">Let us decide</span>
            </span>{' '}
            <br />
            <span className="inline-block mt-2">what&apos;s for dinner</span>
          </h2>
        </div>
      </section>
    </GuestLayout>
  )
}

export default Landing
