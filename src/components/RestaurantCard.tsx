import { InformationCircleIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { useState, VFC } from 'react'
import IconButton from './IconButton'

interface RestaurantCardProps {
  isActive: boolean
  item: any
}

const RestaurantCard: VFC<RestaurantCardProps> = ({ isActive, item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

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
            <h3 className="text-2xl font-medium text-white">{item.name}</h3>
          </div>

          <div className="flex space-x-4">
            <IconButton
              icon={(cn) => (
                <InformationCircleIcon className={clsx('text-gray-300', cn)} />
              )}
              variant="secondary"
              onClick={() => setModalIsOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* <IFrameModal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        src={item.url}
        title={`${item.label} Recipe Details`}
      /> */}
    </div>
  )
}

export default RestaurantCard
