import { mockProducts } from "./ShopPage/products";
import { useOutletContext } from "react-router";
export default function  CartPage() {

    const [cart, setCart] = useOutletContext();

    return(
        <section>
            <div>
                {cart.map((product) => (
                    <div key={product.key}>

                        <div>
                        <img src={product.title}/>
                        <h4>{product.title}</h4>
                        <button>+</button> <button>-</button> 
                        </div>
                   
                        <div>
                            <span>{product.price}</span><span>{product.oldPrice}</span>
                            <span>{product.quantity}</span> <span>remove</span>
                        </div>
                      

                    </div>
                ))}
            </div>
        </section>
    )
  
}