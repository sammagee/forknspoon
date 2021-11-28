import { RadioGroup as HRadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { ReactNode, VFC } from 'react'

type RadioGroupOption = {
  display: string
  value: string | null
  icon?: ((className: string) => ReactNode) | ReactNode
}

interface RadioGroupProps {
  label?: string
  description?: string
  onChange(value: string): void
  options: RadioGroupOption[]
  value: string | null
}

const RadioGroup: VFC<RadioGroupProps> = ({
  label,
  description,
  onChange,
  options,
  value,
}) => {
  return (
    <HRadioGroup value={value} onChange={onChange}>
      {label && (
        <HRadioGroup.Label className="mx-3 text-sm text-gray-600 dark:text-gray-400">
          {label}
        </HRadioGroup.Label>
      )}
      {description && (
        <HRadioGroup.Description className="mx-3 text-xs text-gray-400 dark:text-gray-500">
          {description}
        </HRadioGroup.Description>
      )}

      <div className="flex h-12 p-1 mt-1 space-x-1 overflow-hidden bg-gray-900 bg-opacity-3 dark:bg-black dark:bg-opacity-20 rounded-xl">
        {options.map((option, idx) => (
          <HRadioGroup.Option
            key={idx}
            as="button"
            value={option.value}
            className={({ checked }) =>
              clsx(
                'flex-1 relative items-center justify-center px-4 py-2 cursor-pointer transform flex focus:outline-none rounded-lg transition duration-150 ease-in-out focus-visible:ring focus-visible:ring-opacity-3',
                checked
                  ? 'bg-white dark:bg-gray-600 shadow-sm'
                  : 'hover:bg-gray-900 hover:bg-opacity-3 dark:hover:bg-black dark:hover:bg-opacity-10 hover:scale-102 active:scale-98'
              )
            }
          >
            {({ checked }) => (
              <>
                <div className="flex items-center justify-center space-x-1">
                  <div className="text-sm">
                    <HRadioGroup.Label
                      as="p"
                      className={`font-medium ${
                        checked
                          ? 'text-gray-800 dark:text-gray-300'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {option.display}
                    </HRadioGroup.Label>
                  </div>

                  {typeof option.icon === 'function'
                    ? option.icon('w-4 h-4 text-gray-400 dark:text-gray-500')
                    : option.icon}
                </div>
              </>
            )}
          </HRadioGroup.Option>
        ))}
      </div>
    </HRadioGroup>
  )
}

export default RadioGroup
