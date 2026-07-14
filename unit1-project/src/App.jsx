import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cardpack from './components/CardPack'
import Greeting from './components/Greeting'
import PackOpen from './components/PackOpen'
import AboutMe from './components/About'

function App() {
   return (
    <>
      <Header />
      <main>
        <AboutMe />
      </main>
           
    </>
  )
}

export default App
