import { Dialog, Transition } from '@headlessui/react'
import { Fragment, VFC } from 'react'

interface IFrameModalProps {
  isOpen: boolean
  setIsOpen(value: boolean): void
  src: string
  title: string
}

const IFrameModal: VFC<IFrameModalProps> = ({
  isOpen,
  setIsOpen,
  src,
  title,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="grid min-h-screen p-4 text-center place-items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="overflow-hidden transition-all transform shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="sr-only">
                Recipe Details
              </Dialog.Title>

              <iframe
                title={title}
                className="w-[calc(100vw-6rem)] h-[calc(100vh-6rem)]"
                src={src}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default IFrameModal
