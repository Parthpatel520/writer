import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StoryList from './Pages/StoryList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ourblog from './Pages/Ourblog'
import Ourstory from './Pages/Ourstory'
import Privacy from './Pages/Privacy'
import Figma_ipsum from './Pages/Figma_ipsum'
import Details from './Pages/Details'
import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>   
      <Routes>
        <Route  path='/'element={<HomePage/>} />
        <Route  path='/Figma_ipsum'element={<Figma_ipsum/>} />
        <Route  path='/Ourblog'element={<Ourblog/>} />
        <Route  path='/Ourstory'element={<Ourstory/>} />
        <Route  path='/Privacy'element={<Privacy/>} />
        <Route  path='/storylist'element={<StoryList/>} />
        <Route  path='/details'element={<Details/>} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
