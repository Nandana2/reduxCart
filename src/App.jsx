import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Carts from './pages/Carts'
import Details from './pages/Details'
import Wishlist from './pages/Wishlist'
import Landing from './pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='' element={<Landing/>}/>
      <Route path='carts' element={<Carts/>}/>
      <Route path='details/:id' element={<Details/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>

    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
