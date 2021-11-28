import { Switch as HSwitch } from '@headlessui/react'
import clsx from 'clsx'
import type { VFC } from 'react'

interface ToggleProps {
  description?: string
  handleChange(value: boolean): void
  label?: string
  value: boolean
}

const Toggle: VFC<ToggleProps> = ({
  description,
  handleChange,
  label,
  value,
}) => {
  return (
    <HSwitch.Group as="div" className="flex items-center justify-between">
      <div>
        {label && (
          <HSwitch.Label className="mx-3 text-sm text-gray-600 dark:text-gray-400">
            {label}
          </HSwitch.Label>
        )}
        {description && (
          <HSwitch.Description className="mx-3 text-xs text-gray-400 dark:text-gray-500">
            {description}
          </HSwitch.Description>
        )}
      </div>

      <div className="relative mt-1">
        <HSwitch
          checked={value}
          onChange={handleChange}
          className={clsx(
            'relative inline-flex items-center h-8 rounded-lg w-14 transition-colors focus:outline-none',
            value
              ? 'bg-brand-500'
              : 'bg-gray-300 bg-opacity-20 dark:bg-black dark:bg-opacity-20'
          )}
        >
          <span
            className={clsx(
              'inline-block w-6 h-6 transform rounded-md transition-transform',
              value ? 'bg-white translate-x-7' : 'bg-gray-300 translate-x-1'
            )}
          />
        </HSwitch>
      </div>
    </HSwitch.Group>
  )
}

export default Toggle
