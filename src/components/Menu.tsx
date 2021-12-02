import { Menu as HMenu, Transition } from '@headlessui/react'
import type { Placement } from '@popperjs/core'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { usePopper } from '../hooks/usePopper'

interface MenuItemProps {
  onClick?(): void
}

export const MenuItem: FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <HMenu.Item>
      {({ active }) => (
        <button
          className={clsx(
            'flex items-center justify-between space-x-2 w-full px-4 py-2 text-left text-gray-600 dark:text-gray-300 rounded-lg font-medium focus:outline-none',
            active &&
              'bg-gray-900 bg-opacity-3 dark:hover:bg-black dark:hover:bg-opacity-20'
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </HMenu.Item>
  )
}

interface MenuProps {
  button: ReactNode
  placement?: Exclude<Placement, 'auto' | 'auto-end' | 'auto-start'>
}

const Menu: FC<MenuProps> = ({
  button,
  children,
  placement = 'bottom-end',
}) => {
  let [trigger, container] = usePopper({
    placement,
    strategy: 'fixed',
    modifiers: [{ name: 'offset', options: { offset: [0, 10] } }],
  })

  return (
    <HMenu as="div" className="relative">
      <HMenu.Button as="div" ref={trigger}>
        {button}
      </HMenu.Button>

      <div ref={container} className="z-10 w-screen max-w-2xs">
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <HMenu.Items className="focus:outline-none">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="p-1 text-gray-900 bg-white dark:bg-gray-600 dark:text-gray-200">
                {children}
              </div>
            </div>
          </HMenu.Items>
        </Transition>
      </div>
      {/* </Transition> */}
    </HMenu>
  )
}

export default Menu
