import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cardpack from './components/CardPack'
import Greeting from './components/Greeting'

function App() {
   return (
    <>
      <Header />
      <main>
        <Greeting />
        <Cardpack /> 
      </main>
           
    </>
  )
}

export default App
