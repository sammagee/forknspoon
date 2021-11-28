import { Popover as HPopover, Transition } from '@headlessui/react'
import type { Placement } from '@popperjs/core'
import clsx from 'clsx'
import { FC, Fragment, ReactNode } from 'react'

interface PopoverProps {
  button: ReactNode
  placement?: Exclude<Placement, 'auto' | 'auto-end' | 'auto-start'>
}

const Popover: FC<PopoverProps> = ({
  button,
  children,
  placement = 'bottom',
}) => {
  const positionClasses = {
    bottom: 'top-full mt-2 origin-top',
    'bottom-end': 'top-full right-0 mt-2 origin-top-right',
    'bottom-start': 'top-full left-0 mt-2 origin-top-left',
    left: 'right-full mr-2 origin-right',
    'left-end': 'right-full bottom-0 mr-2 origin-bottom-right',
    'left-start': 'right-full top-0 mr-2 origin-top-right',
    right: 'left-full ml-2 origin-left',
    'right-end': 'left-full bottom-0 ml-2 origin-bottom-left',
    'right-start': 'left-full top-0 ml-2 origin-top-left',
    top: 'bottom-full mb-2 origin-bottom',
    'top-end': 'bottom-full right-0 mb-2 origin-bottom-right',
    'top-start': 'bottom-full left-0 mb-2 origin-bottom-left',
  }[placement]

  return (
    <HPopover className="relative">
      <HPopover.Button as="div">{button}</HPopover.Button>

      <Transition
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-90 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-90 opacity-0"
      >
        <HPopover.Panel
          className={clsx('absolute z-10 w-screen max-w-2xs', positionClasses)}
        >
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-1 text-gray-900 bg-white dark:bg-gray-600 dark:text-gray-200">
              {children}
            </div>
          </div>
        </HPopover.Panel>
      </Transition>
    </HPopover>
  )
}

export default Popover
