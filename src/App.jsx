import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import StoryList from './Pages/StoryList'
import Storydetail from './Pages//Details'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ourblog from './Pages/Ourblog'
import Ourstory from './Pages/Ourstory'
import Privacy from './Pages/Privacy'
import Figma_ipsum from './Pages/Figma_ipsum'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>   
      <Routes>
        <Route  path='/'element={<Home/>} />
        <Route  path='/Figma_ipsum'element={<Figma_ipsum/>} />
        <Route  path='/Ourblog'element={<Ourblog/>} />
        <Route  path='/Ourstory'element={<Ourstory/>} />
        <Route  path='/Privacy'element={<Privacy/>} />
        <Route  path='/storylist'element={<StoryList/>} />
        <Route  path='/Storydetail'element={<Storydetail/>} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
