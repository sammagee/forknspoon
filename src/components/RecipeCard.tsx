import { HeartIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { ClockIcon, HashtagIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { useState, VFC } from 'react'
import axios from '../lib/axios'
import IconButton from './IconButton'
import IFrameModal from './IFrameModal'
import LoadingIndicator from './LoadingIndicator'

interface RecipeCardProps {
  isActive: boolean
  item: any
}

const RecipeCard: VFC<RecipeCardProps> = ({ isActive, item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const saveRecipe = () => {
    setIsSaving(true)
    axios.post('/recipes', item).then(() => setIsSaving(false))
  }

  return (
    <div
      className={clsx(
        'relative flex flex-1 my-auto overflow-hidden shadow-xl rounded-2xl aspect-w-16 aspect-h-16 transform transition-transform ease-in-out duration-250',
        isActive && 'scale-105'
      )}
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/25 dark:bg-gray-900/50" />

      <div className="absolute inset-0 flex flex-1 bg-gradient-to-br from-black/10 to-black/90">
        <div className="flex items-end justify-between w-full p-6 mt-auto space-x-4">
          <div>
            <h3 className="text-2xl font-medium text-white">{item.label}</h3>

            <div className="flex items-center mt-2 space-x-3">
              <span
                className="inline-flex items-center space-x-1 font-medium text-gray-400"
                title="Total time"
              >
                <ClockIcon className="w-4 h-4 text-gray-500" />

                <span>{item.totalTime}</span>
              </span>

              <span
                className="inline-flex items-center space-x-0.5 font-medium text-gray-400"
                title="Servings"
              >
                <HashtagIcon className="w-4 h-4 text-gray-500" />

                <span>{item.yield}</span>
              </span>
            </div>
          </div>

          <div className="flex space-x-4">
            <IconButton
              icon={(cn) => (
                <InformationCircleIcon className={clsx('text-gray-300', cn)} />
              )}
              variant="secondary"
              onClick={() => setModalIsOpen(true)}
            />

            <IconButton
              icon={(cn) =>
                isSaving ? (
                  <LoadingIndicator size={cn} />
                ) : (
                  <HeartIcon className={clsx('text-gray-300', cn)} />
                )
              }
              variant="secondary"
              onClick={saveRecipe}
            />
          </div>
        </div>
      </div>

      <IFrameModal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        src={item.url}
        title={`${item.label} Recipe Details`}
      />
    </div>
  )
}

export default RecipeCard
