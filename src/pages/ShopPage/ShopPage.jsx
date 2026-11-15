import { mockProducts } from "./products";
import { useOutletContext } from "react-router";
export default function ShopPage() {
    
    const [cart, setCart]= useOutletContext()

      const addToCart = (product) => {
  
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

    return(

        <section>
            <div className="min-w-full grid grid-cols-4 gap-20 my-10">
                {mockProducts.map((product) => {
                   if (product.inStock) {
                    return(
                        <div key={product.key} className=" w-55 h-60">
                        <img src={product.title} className="bg-amber-100 h-50 w-full"/>
                       <div>
                           <span className="text-xs">{product.category}</span>
                            <h4 className="text-xm">{product.title}</h4>
                                <div className="font-bold">
                                   <span>{product.price}</span><span>{product.oldPrice}</span>
                                </div>
                        <button onClick={ () => addToCart(product)} className="cursor-pointer border-2 border-amber-200">Add to Cart</button>
                       </div>
                     
                    </div>
                    )
                     
                   } 
                   
                })}
            </div>
        </section>
    )
}