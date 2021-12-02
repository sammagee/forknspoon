import {
  ClockIcon,
  ExternalLinkIcon,
  HashtagIcon,
  HeartIcon,
} from '@heroicons/react/outline'
import clsx from 'clsx'
import { useState, VFC } from 'react'
import axios from '../lib/axios'
import { Recipe } from '../types/Recipe'
import AnchorIconButton from './AnchorIconButton'
import IconButton from './IconButton'
import LoadingIndicator from './LoadingIndicator'

interface SavedRecipeProps {
  mutate(): void
  recipe: Recipe
}

const SavedRecipe: VFC<SavedRecipeProps> = ({ mutate, recipe }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const removeSavedRecipe = (id: number) => {
    setIsDeleting(true)
    axios.delete(`/saved/${id}`).then(() => {
      setIsDeleting(false)
      mutate()
    })
  }

  return (
    <>
      <article
        key={recipe.id}
        className="flex items-center justify-between px-6 py-4 space-x-4"
      >
        <div>
          <h3 className="text-xl font-medium text-gray-400">{recipe.label}</h3>

          <div className="flex items-center mt-2 space-x-3">
            <span
              className="inline-flex items-center space-x-1 font-medium text-gray-400"
              title="Total time"
            >
              <ClockIcon className="w-4 h-4 text-gray-500" />

              <span>{recipe.total_time}</span>
            </span>

            <span
              className="inline-flex items-center space-x-0.5 font-medium text-gray-400"
              title="Servings"
            >
              <HashtagIcon className="w-4 h-4 text-gray-500" />

              <span>{recipe.yield}</span>
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-4">
            <AnchorIconButton
              href={recipe.url}
              icon={(cn) => (
                <ExternalLinkIcon className={clsx('text-gray-300', cn)} />
              )}
              rel="noopener noreferrer"
              target="_blank"
              variant="secondary"
            />

            <IconButton
              icon={(cn) =>
                isDeleting ? (
                  <LoadingIndicator size={cn} />
                ) : (
                  <HeartIcon className={clsx('text-pink-500', cn)} />
                )
              }
              variant="secondary"
              onClick={() => removeSavedRecipe(recipe.id)}
            />
          </div>
        </div>
      </article>
    </>
  )
}

export default SavedRecipe
