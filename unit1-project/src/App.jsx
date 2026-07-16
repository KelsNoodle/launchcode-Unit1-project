import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
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
        <Routes>
          <Route path="/" element={<Greeting /> <PackOpen />} />
          <Route path="About" element={<About />} />
          <Route path="Home" element={<Greeting />, <PackOpen />} />
          <Route path="Contact" element={} />
          <Route path="*" element={<Navigate to="/" />} />
        <AboutMe />
        </Routes>
      </main>
           
    </>
  )
}

export default App
