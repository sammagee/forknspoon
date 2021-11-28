import clsx from 'clsx'
import { VFC } from 'react'

interface SkeletonCardProps {
  isActive?: boolean
}

const SkeletonCard: VFC<SkeletonCardProps> = ({ isActive }) => {
  return (
    <div
      className={clsx(
        'relative bg-white dark:bg-gray-800 flex flex-1 my-auto overflow-hidden shadow-xl rounded-2xl aspect-w-16 aspect-h-16 transform transition-transform ease-in-out duration-250',
        isActive && 'scale-105'
      )}
    />
  )
}

export default SkeletonCard
