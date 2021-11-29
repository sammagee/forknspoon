import {
  ClockIcon,
  HashtagIcon,
  HeartIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
import clsx from 'clsx'
import { useState, VFC } from 'react'
import axios from '../lib/axios'
import { Recipe } from '../types/Recipe'
import IconButton from './IconButton'
import IFrameModal from './IFrameModal'
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
            <IconButton
              icon={(cn) => (
                <InformationCircleIcon className={clsx('text-gray-300', cn)} />
              )}
              variant="secondary"
              onClick={() => setModalIsOpen(true)}
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

      <IFrameModal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        src={recipe.url}
        title={`${recipe.label} Recipe Details`}
      />
    </>
  )
}

export default SavedRecipe
