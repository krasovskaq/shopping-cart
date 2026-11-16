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
        const existing =  prev.find((productItem) => productItem.id === product.id) 
        if(existing) {
          return prev.map((item) => (
            item.id === product.id ?  {...item, quantity: item.quantity + 1} : item)
    
      );
    }
    
       return [ 
        ...prev, 
        {id : product.id, title: product.title, quantity: 1, price: product.price, oldPrice: product.oldPrice}]
    })
  }

  const removeFromCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (productItem) => productItem.id === product.id,
      );
      if (!existing) return prev;

      if (existing.quantity === 1) {
        return prev.filter((productItem) => productItem.id !== product.id)
      }
       return prev.map((productItem) => 
            product.id === productItem.id  ?
            {...productItem, quantity: productItem.quantity - 1 } :
            productItem
          
        );
      }
    );
  };

  return (
    <>
  
      <Heading cart={cart}/>
      <Outlet context={{cart, setCart, addToCart,removeFromCart }} />
    </>
  )
}

export default App
