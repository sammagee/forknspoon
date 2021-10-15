import clsx from 'clsx'
import { FC, ReactChild } from 'react'

interface Props {
  children?: ReactChild[] | ReactChild
  index: number
}

const Card: FC<Props> = ({ children, index }) => {
  const displayClasses =
    {
      0: 'relative scale-100 z-30',
      1: 'absolute translate-x-6 scale-95 z-20',
      2: 'absolute translate-x-12 scale-90 z-10',
    }[index] || 'hidden'

  return (
    <div
      className={clsx(
        'w-full max-w-md py-56 bg-white shadow-lg rounded-xl',
        displayClasses
      )}
    ></div>
  )
}

export default Card
