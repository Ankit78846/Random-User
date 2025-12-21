import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userfinder from './components/Userfinder'
import QuotesGen from './components/QuotesGen'
import RecipeFinder from './components/RecipeFinder'

function App() {


  return (
    <>
      <Userfinder />
      <QuotesGen />
      <RecipeFinder/>
    </>
  )
}

export default App
