import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import { IoClose } from 'react-icons/io5'

function MainModals({modelOpen, setModelOpen, children}) {
    const cancelButtonRef = React.useRef()
  return (
    <>
    <Transition show={modelOpen} as={React.Fragment} appear>
        <Dialog as='div' className='fixed inset-0 z-30 overflow-y-auto text-center' initialFocus={cancelButtonRef} onClose={() => setModelOpen(false)}>
            <div className='min-h-screen px-4 text-center'>
                <Transition.Child as={React.Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0'>
                    <Dialog.Overlay className='fixed inset-0 bg-black opacity-60' />
                    
                </Transition.Child>
                <Dialog.Overlay className='fixed inset-0 bg-black opacity-60' />
                <span className='inline-block h-screen align-middle' aria-hidden='true'>
                        &#8203;
                    </span>
                    <Transition.Child as={React.Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                    
                    {children}
                </Transition.Child>
                <div className='absolute right-5 top-5'>
                    <button onClick={() => setModelOpen(false)} type='button' className='inline-flex transitions justify-center px-4 py-2 text-base font-medium text-white bg-subMain rounded-md hover:bg-white hover:text-subMain'>
                        <IoClose />
                    </button>
                </div>
            </div>
        </Dialog>
    </Transition>
    </>
  )
}

export default MainModals