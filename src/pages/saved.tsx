import { HeartIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { VFC } from 'react'
import AnchorButton from '../components/AnchorButton'
import Logo from '../components/Logo'
import PageLoader from '../components/PageLoader'
import SavedRecipe from '../components/SavedRecipe'
import { useSavedRecipes } from '../hooks/useSavedRecipes'
import AppLayout from '../layouts/app/Layout'

const Saved: VFC = () => {
  const { isLoading, mutate, savedRecipes } = useSavedRecipes()

  return !isLoading ? (
    <AppLayout>
      <section className="w-full max-w-3xl px-4 mx-auto my-32">
        <header className="flex flex-row-reverse items-center justify-between lg:justify-start lg:space-x-4 lg:-ml-20 lg:flex-row">
          <div className="grid w-16 h-16 bg-black rounded-full bg-opacity-10 place-items-center">
            <HeartIcon className="w-8 h-8 text-gray-500" />
          </div>

          <h1 className="text-4xl font-medium text-gray-300">Saved Recipes</h1>
        </header>

        {savedRecipes && savedRecipes.length > 0 ? (
          <div className="mt-6 bg-gray-800 divide-y divide-gray-700 rounded-xl">
            {savedRecipes.map((recipe) => (
              <SavedRecipe key={recipe.id} mutate={mutate} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-lg font-medium text-gray-500">
              You&apos;ll need to save some recipes before they show up here!
            </p>

            <AnchorButton
              className="mt-6"
              icon={(cn) => <Logo className={clsx('ml-3', cn)} />}
              href="/"
            >
              Let&apos;s Eat
            </AnchorButton>
          </div>
        )}
      </section>
    </AppLayout>
  ) : (
    <PageLoader />
  )
}

export default Saved
