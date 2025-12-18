import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userfinder from './components/Userfinder'
import QuotesGen from './components/QuotesGen'

function App() {


  return (
    <>
      <Userfinder />
      <QuotesGen />
    </>
  )
}

export default App
