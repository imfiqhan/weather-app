import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className='bg-white shadow-2xl rounded-2xl overflow-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='bg-gray-100 p-4'>
            <h1 className='text-2xl font-bold'>Hello World</h1>
            <p className='text-gray-700'>This is a simple React app with Tailwind CSS.</p>
          </div>
          <div className='bg-gray-200 p-4'>
            <h2 className='text-xl font-semibold'>Tailwind CSS</h2>
            <p className='text-gray-600'>This is a simple example of using Tailwind CSS with React.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
