import { RadioGroup as HRadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { VFC } from 'react'
import Icon, { IconName } from './Icon'

type RadioGroupOption = {
  display: string
  value: string | null
  icon?: IconName
}

interface RadioGroupProps {
  label?: string
  description?: string
  onChange(value: RadioGroupOption): void
  options: RadioGroupOption[]
  value: RadioGroupOption
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
        <HRadioGroup.Label className="mx-3 text-sm text-gray-600">
          {label}
        </HRadioGroup.Label>
      )}
      {description && (
        <HRadioGroup.Description className="mx-3 text-xs text-gray-400">
          {description}
        </HRadioGroup.Description>
      )}

      <div className="flex h-12 p-1 mt-1 space-x-1 overflow-hidden bg-gray-900 bg-opacity-3 rounded-xl">
        {options.map((option, idx) => (
          <HRadioGroup.Option
            key={idx}
            as="button"
            value={option}
            className={({ checked }) =>
              clsx(
                'flex-1 relative items-center justify-center px-4 py-2 cursor-pointer transform flex focus:outline-none rounded-lg transition duration-150 ease-in-out focus-visible:ring focus-visible:ring-offset-gray-200',
                checked
                  ? 'bg-white shadow-sm hover:bg-white'
                  : 'hover:bg-gray-900 hover:bg-opacity-3 hover:scale-102 active:scale-98'
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
                        checked ? 'text-gray-800' : 'text-gray-600'
                      }`}
                    >
                      {option.display}
                    </HRadioGroup.Label>
                  </div>

                  {option.icon && (
                    <Icon
                      className="w-4 h-4 text-gray-400"
                      name={option.icon}
                    />
                  )}
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
