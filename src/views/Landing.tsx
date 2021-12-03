import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'
import AnchorButton from '../components/AnchorButton'
import Logo from '../components/Logo'
import PreferencesIllustration from '../illustrations/PreferencesIllustration'
import RecipeIllustration from '../illustrations/RecipeIllustration'
import RestaurantIllustration from '../illustrations/RestaurantIllustration'
import GuestLayout from '../layouts/guest/Layout'

const Landing: FC = () => {
  return (
    <GuestLayout>
      <Head>
        <title>Fork &amp; Spoon</title>
      </Head>

      <div className="grid py-32 md:py-48 lg:py-64 place-items-center">
        <section className="flex flex-col items-center">
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
          <AnchorButton
            className="mt-16"
            href="/register"
            icon={(cn) => <Logo className={clsx('ml-4', cn)} />}
            variant="secondary"
          >
            Let&apos;s eat
          </AnchorButton>
        </section>

        <section className="w-full overflow-hidden">
          <div className="mt-32 md:hidden">
            <div className="relative border-black border-[1rem] rounded-[3rem] overflow-hidden shadow-lg dark:shadow-2xl flex">
              <div className="absolute top-0 flex items-center w-full">
                <span className="z-10 block w-32 mx-auto bg-black relative rounded-b-[1.25rem] h-7">
                  <span className="absolute top-[-0.75rem] inline-block w-6 h-6 border-t-[0.75rem] border-r-[1rem] border-black rounded-tr-[1.25rem] left-[-0.45rem]" />
                  <span className="absolute top-[-0.75rem] inline-block w-6 h-6 border-t-[0.75rem] border-l-[1rem] border-black rounded-tl-[1.25rem] right-[-0.45rem]" />
                </span>
              </div>

              <Image
                className="pointer-events-none select-none"
                src="/images/landing/mobile.png"
                width={1080}
                height={2337}
                alt=""
              />
            </div>
          </div>

          <div className="relative hidden w-full p-24 mt-32 md:block">
            <div className="relative border-black border-[1rem] rounded-[2rem] overflow-hidden shadow-lg dark:shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  className="pointer-events-none select-none"
                  src="/images/landing/desktop.png"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-64 mt-64 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-32">
            <div className="flex flex-col items-center justify-between space-y-16 md:space-y-0 md:space-x-16 md:flex-row">
              <div className="grid p-12 mx-auto bg-black rounded-full h-80 w-80 place-items-center bg-opacity-10">
                <RecipeIllustration className="grid w-full h-full place-items-center" />
              </div>
              <div className="flex-1 space-y-4 lg:!mr-96">
                <h2 className="text-4xl font-medium text-gray-700 dark:text-gray-400">
                  Recipes
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-500">
                  Discover new recipes that you&apos;ll love to cook <i>and</i>{' '}
                  eat. Our easy-to-use interface allows you to try new things
                  and save the ones you love the most.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center justify-between space-y-16 md:space-y-0 md:space-x-16 md:flex-row">
              <div className="flex-1 space-y-4 lg:!ml-96 mt-16 md:mt-0">
                <h2 className="text-4xl font-medium text-gray-700 dark:text-gray-400">
                  Restaurants
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-500">
                  Find a restaurant in a new area, play
                  &ldquo;restaurant-roulette&rdquo;, or discover a new
                  restaurant that is similar to ones you already know and enjoy.
                </p>
              </div>
              <div className="grid p-12 mx-auto bg-black rounded-full h-80 w-80 place-items-center bg-opacity-10">
                <RestaurantIllustration className="grid w-full h-full place-items-center" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between space-y-16 md:space-y-0 md:space-x-16 md:flex-row">
              <div className="grid p-12 mx-auto bg-black rounded-full h-80 w-80 place-items-center bg-opacity-10">
                <PreferencesIllustration className="grid w-full h-full place-items-center" />
              </div>
              <div className="flex-1 space-y-4 lg:!mr-96">
                <h2 className="text-4xl font-medium text-gray-700 dark:text-gray-400">
                  Customize
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-500">
                  Update your preferences to make sure you find the perfect meal
                  for the occasion, add dietary or health restrictions to find
                  something that fits your needs, or simply search for exactly
                  what you want.
                </p>
              </div>
            </div>
            <div className="!mt-96">
              <h2 className="text-5xl font-bold text-center text-gray-700 dark:text-gray-400">
                ...and more
              </h2>
            </div>
          </div>
        </section>

        <footer className="flex items-center justify-between w-full pt-16 mt-16 space-x-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500">
            &copy; Fork &amp; Spoon {new Date().getFullYear()}
          </p>

          <p className="flex items-center text-gray-500">
            Made with&nbsp;
            <svg
              className="flex-shrink-0 w-4 h-4 text-brand-500 animate-beat"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            &nbsp;by&nbsp;
            <a
              className="font-medium hover:underline focus:ring-2 focus:outline-none focus:ring-brand-500"
              href="https://krafted.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Krafted
            </a>
          </p>
        </footer>
      </div>
    </GuestLayout>
  )
}

export default Landing
