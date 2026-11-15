import { mockProducts } from "./ShopPage/products";

export default function  CartPage() {

    return(
        <section>
            <div>
                {mockProducts.map((product) => (
                    <div key={product.key}>

                        <div>
                        <img src={product.image}/>
                        <h4>{product.title}</h4>
                        <button>+</button> <button>-</button> 
                        </div>
                   
                        <div>
                            <span>{product.price}</span><span>{product.oldPrice}</span>
                            <span>1</span> <span>remove</span>
                        </div>
                      

                    </div>
                ))}
            </div>
        </section>
    )
  
}