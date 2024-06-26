// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'

import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/Authentication_React/login" element={<Login />} />
        <Route path="/Authentication_React/signup" element = {<Signup />} />
        <Route path = "/Authentication_React/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
