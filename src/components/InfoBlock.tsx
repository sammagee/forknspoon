import clsx from 'clsx'
import { FC } from 'react'

interface InfoBlockProps {
  intent?: 'success' | 'warning' | 'danger' | 'inform'
}

const InfoBlock: FC<InfoBlockProps> = ({ children, intent = 'inform' }) => {
  const intentClasses = {
    inform:
      'text-gray-900 dark:text-white text-opacity-50 dark:text-opacity-50 bg-gray-900 bg-opacity-3 dark:bg-black dark:bg-opacity-20',
    success: 'bg-brand-500 text-brand-800',
    warning: 'bg-yellow-400 text-yellow-800',
    danger: 'bg-red-400 text-red-800',
  }[intent]

  return (
    <div className={clsx('text-sm px-6 py-4 rounded-xl', intentClasses)}>
      {children}
    </div>
  )
}

export default InfoBlock
