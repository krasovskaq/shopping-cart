import { mockProducts } from "./ShopPage/products";
import { useOutletContext } from "react-router";
export default function CartPage() {
   const {cart, setCart, addToCart, removeFromCart, removeItem}= useOutletContext();

  return (
    <section>
      <div>
        {Object.values(cart).map((product,index) => (
    
          <div key={product.id}>
            <div>
              <img src={product.title} />
              <h4>{product.title}</h4>
              <button onClick={ () => addToCart(product)}>+</button> <span>{product.quantity} </span>
              <button onClick={ () => removeFromCart(product)}>-</button>
            </div>

            <div>
              <span>{product.price}</span>
              <span>{product.oldPrice}</span>
              <span>{product.quantity}</span> <span onClick={ () => setCart((prev) => removeItem(prev, product))}>remove</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
