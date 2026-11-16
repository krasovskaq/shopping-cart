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


     const addToCart = (product) => {
      console.log(1)
    
      setCart((prev) =>  {
        const existing =  prev[product.id]
        if(existing) {

          return {
            ...prev,
            [product.id]: {...existing, quantity: existing.quantity + 1}
          }
       
    }
    
       return {
        ...prev, 
        [product.id]: { id: product.id, title: product.title, quantity: 1, price: product.price, oldPrice: product.oldPrice },
       }
    })
  }

  const removeFromCart = (product) => {
    setCart((prev) => {
      const existing = cart[product.id];
      if (!existing) return prev;

      if (existing.quantity === 1) {
       return removeItem(prev, product)
      }
       return {
        ...prev, 
        [product.id] : {...existing, quantity: existing.quantity - 1 }
       };
      }
    );
  };

  const removeItem = (prev, product) => {

       const newCart = {...prev}
        delete newCart[product.id]
        return newCart

  }
  return (
    <>
  
      <Heading cart={cart}/>
      <Outlet context={{cart, setCart, addToCart, removeFromCart, removeItem }} />
    </>
  )
}

export default App
