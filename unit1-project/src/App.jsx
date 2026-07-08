import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cardpack from './components/CardPack'
import Greeting from './components/Greeting'
import PackOpen from './components/PackOpen'

function App() {
   return (
    <>
      <Header />
      <main>
        <Greeting />
        <Cardpack /> 
        <PackOpen />
      </main>
           
    </>
  )
}

export default App
