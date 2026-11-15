import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Heading from './components/Heading'
import { Outlet } from 'react-router'
function App() {
  const [cart, setCart] = useState([]);

  const cartSample = [
    {
      id: 1,
      title: "title",
      quantity: 1,
      price: 38,

    },
  ]


  return (
    <>
  
      <Heading cart={cart}/>
      <Outlet context={[cart, setCart]}/>
    </>
  )
}

export default App
