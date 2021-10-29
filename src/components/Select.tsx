import { Listbox as HListbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, VFC } from 'react'
import Icon, { IconName } from './Icon'

type SelectOption = {
  display: string
  value: string | null
  icon?: IconName
}

interface SelectProps {
  label?: string
  description?: string
  onChange(value: SelectOption): void
  options: SelectOption[]
  value: SelectOption
}

const Select: VFC<SelectProps> = ({
  label,
  description,
  onChange,
  options,
  value,
}) => {
  return (
    <HListbox value={value} onChange={onChange}>
      {label && (
        <HListbox.Label className="mx-3 text-sm text-gray-600 dark:text-gray-400">
          {label}
        </HListbox.Label>
      )}
      {description && (
        <p className="mx-3 text-xs text-gray-400 dark:text-gray-500">
          {description}
        </p>
      )}

      <div className="relative mt-1">
        <HListbox.Button
          className={clsx(
            'relative flex items-center justify-between w-full h-12 px-5 text-sm text-left text-gray-900 dark:text-gray-300 transition duration-150 ease-in-out origin-bottom transform bg-gray-900 dark:bg-black dark:bg-opacity-20 cursor-pointer rounded-xl bg-opacity-3 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50 hover:bg-opacity-5 dark:hover:bg-opacity-25 hover:scale-102 active:scale-98'
          )}
        >
          <span className="font-medium truncate">{value.display}</span>

          <Icon
            className="w-4 h-4 text-gray-900 text-opacity-50 dark:text-gray-300 dark:text-opacity-50"
            name="chevronDown"
          />
        </HListbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <HListbox.Options className="absolute z-10 w-full p-1 mt-2 overflow-auto text-sm bg-white shadow-lg dark:bg-gray-600 rounded-xl max-h-60 focus:outline-none">
            {options.map((option, idx) => (
              <HListbox.Option
                key={idx}
                className={({ active }) =>
                  clsx(
                    'cursor-pointer select-none relative py-2 pr-10 pl-4 text-gray-900 dark:text-gray-300 rounded-lg',
                    active &&
                      'bg-gray-900 bg-opacity-3 dark:bg-black dark:bg-opacity-20'
                  )
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={clsx(
                        'block truncate',
                        selected ? 'font-medium' : 'font-normal'
                      )}
                    >
                      {option.display}
                    </span>

                    {selected ? (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <Icon
                          name="check"
                          className="w-4 h-4 text-gray-500"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </HListbox.Option>
            ))}
          </HListbox.Options>
        </Transition>
      </div>
    </HListbox>
  )
}

export default Select
