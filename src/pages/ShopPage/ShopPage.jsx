import { mockProducts } from "./products";

export default function ShopPage() {
    

    return(

        <section>
            <div>
                {mockProducts.map((product) => {
                   if (product.inStock) {
                    return(
                        <div key={product.key}>
                        <img src={product.image}/>
                        <span>{product.category}</span>
                        <h4>{product.title}</h4>
                        <div>
                                   <span>{product.price}</span><span>{product.oldPrice}</span>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                    )
                     
                   } 
                   
                })}
            </div>
        </section>
    )
}