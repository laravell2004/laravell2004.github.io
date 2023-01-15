import { useEffect, useState } from 'react'
import './App.css'
import Profil from './assets/profil.png'
import MyModal from './components/Modals';

function App() {
  

  return (
    <div>
      <h1 className='font-semibold'>Guyonan Anak Teknik Informatika</h1>
      <i className='font-medium text-xs'>by @laravel2004</i>
      <div className='flex justify-center mt-12'>
        <img src={Profil} alt="ini foto" className="rounded-full w-44"/>
      </div>
      <MyModal />
    </div>
  )
}



export default App
