import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import AboutMe from './components/About'
import Home from './components/Home'

function App() {
   return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
           
    </>
  )
}

export default App
