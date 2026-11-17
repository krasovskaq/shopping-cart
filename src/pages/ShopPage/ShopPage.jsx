import { mockProducts } from "./products";
import { useOutletContext } from "react-router";
export default function ShopPage() {
    
    const {cart, setCart, addToCart, removeFromCart}= useOutletContext();


    
    return(

        <section className="py-10">
            <div className="min-w-full grid grid-cols-4 gap-20 my-10">
                {mockProducts.map((product) => {
                   if (product.inStock) {
                    return(
                        <div key={product.id} className=" w-55 h-60">
                        <img src={product.title} className="bg-amber-100 h-50 w-full"/>
                       <div>
                           <span className="text-xs">{product.category}</span>
                            <h4 className="text-xm">{product.title}</h4>
                                <div className="font-bold">
                                   <span>{product.price}</span><span>{product.oldPrice}</span>
                                </div>

                                {(cart[product.id] ) 
                                ? <> <button onClick={() => addToCart(product)}>+</button> <span>{cart[product.id].quantity}</span>  <button onClick={() => removeFromCart(product) }>-</button> </>
                                :  <button onClick={() => addToCart(product)} className="cursor-pointer border-2 border-amber-200">Add to Cart</button> }
                       
                       </div>
                     
                    </div>
                    )
                     
                   } 
                   
                })}
            </div>
        </section>
    )
}