import { InformationCircleIcon, StarIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { useState, VFC } from 'react'
import IconButton from './IconButton'
import IFrameModal from './IFrameModal'

interface CardProps {
  isActive: boolean
  item: any
}

const Card: VFC<CardProps> = ({ isActive, item }) => {
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
        <div className="flex items-end justify-between w-full p-6 mt-auto">
          <h2 className="text-2xl font-medium text-white">{item.label}</h2>

          <div className="flex space-x-4">
            <IconButton
              icon={(cn) => <InformationCircleIcon className={cn} />}
              variant="secondary"
              onClick={() => setModalIsOpen(true)}
              flat
            />
            <IconButton
              icon={(cn) => <StarIcon className={cn} />}
              variant="secondary"
              flat
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

export default Card
