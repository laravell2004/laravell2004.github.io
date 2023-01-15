import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Profil from './../assets/profil.png'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);


  const getData = async () => {
    setLoading(true)
    try {
      let response = await fetch('https://candaan-api.vercel.app/api/text/random');
      let get = await response.json()
      setData(get)
      setLoading(false)
    }
    catch (err) {
      setLoading(false)
    }
  }

  const getImage = async () => {
    setLoading(true)
    try{
      let response = await fetch('https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens');
      let get = await response.json()
      setImage(get.data[0].url)
      setLoading(false)
    }
    catch(err) {
      setLoading(false);
    }
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true)
    getData();
    getImage();
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-blue-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    NGGAK NGAKAK IPK LU 1.00
                  </Dialog.Title>
                  <div className='flex justify-center items-center'>
                    <img src={image} alt='ini foto' className='my-3 object-cover h-96 w-80'  />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                     {loading ? <span>Loading . . .</span> : <span>{data.data}</span>}
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Udah Breee
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={openModal}
                    >
                      Lanjutttt
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
