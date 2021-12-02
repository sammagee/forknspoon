import { HeartIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { VFC } from 'react'
import AnchorButton from '../components/AnchorButton'
import Logo from '../components/Logo'
import PageLoader from '../components/PageLoader'
import SavedRecipe from '../components/SavedRecipe'
import { useSavedRecipes } from '../hooks/useSavedRecipes'
import EmptyIllustration from '../illustrations/EmptyIllustration'
import AppLayout from '../layouts/app/Layout'

const Saved: VFC = () => {
  const { isLoading, mutate, savedRecipes } = useSavedRecipes()

  return !isLoading ? (
    <AppLayout>
      <section className="w-full max-w-3xl px-4 mx-auto my-6 lg:my-32">
        {savedRecipes && savedRecipes.length > 0 ? (
          <>
            <header className="flex flex-row-reverse items-center justify-between lg:justify-start lg:space-x-4 lg:-ml-20 lg:flex-row">
              <div className="grid w-16 h-16 bg-black rounded-full bg-opacity-10 place-items-center">
                <HeartIcon className="w-8 h-8 text-gray-500" />
              </div>

              <h1 className="text-4xl font-medium text-gray-700 dark:text-gray-300">
                Saved Recipes
              </h1>
            </header>
            <div className="mt-6 bg-gray-800 divide-y divide-gray-700 rounded-xl">
              {savedRecipes.map((recipe) => (
                <SavedRecipe key={recipe.id} mutate={mutate} recipe={recipe} />
              ))}
            </div>
          </>
        ) : (
          <div className="mt-8">
            <div className="grid w-full h-full max-w-sm p-12 mx-auto mt-12 bg-black rounded-full lg:mt-24 aspect-1 place-items-center max-h-sm bg-opacity-10">
              <EmptyIllustration className="grid w-full h-full place-items-center" />
            </div>

            <p className="mt-12 text-lg font-medium text-center text-gray-500">
              You&apos;ll need to save some
              <br />
              recipes before they show up here!
            </p>

            <div className="text-center">
              <AnchorButton
                className="mt-12"
                icon={(cn) => <Logo className={clsx('ml-3', cn)} />}
                href="/"
              >
                Let&apos;s Eat
              </AnchorButton>
            </div>
          </div>
        )}
      </section>
    </AppLayout>
  ) : (
    <PageLoader />
  )
}

export default Saved
