import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Discovery from './Pages/Discovery/Discovery'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/en/discovery' element={<Discovery />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App