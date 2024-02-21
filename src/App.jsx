import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marques from './components/Marques'
import About from './components/About'

function App() {
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marques />
      <About />

    </div>
  )
}

export default App