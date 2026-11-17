import { Link } from "react-router"
import { Search, ShoppingCart } from 'lucide-react';
export default function Heading({cart}) {
    

    return (

    <header  className="select-none flex flex-row justify-between items-center px-25 py-10 font-heading-2 font-normal text-2xl border-b">
        <nav className="tracking-widest ">
            <ul className="flex flex-row gap-10 text-gray-700 ">
                <Link to="home" className="after:opacity-0 after:bg-gray-800  after:block after:h-px after:w-full hover:after:opacity-100 hover:text-gray-900">Home</Link>
                <Link to="shop" className="after:opacity-0 after:bg-gray-800 after:block after:h-px  after:w-full hover:after:opacity-100 hover:text-gray-900">Shop</Link>
            </ul>
        </nav>
    
        <div>Logo</div>

        <nav>
            <ul className="flex flex-row gap-10 cursor-pointer">
                <li className="  after:opacity-0 after:bg-gray-800  after:block after:border-b  hover:after:opacity-100 hover:text-gray-900"><Search className="stroke-gray-700 hover:stroke-gray-800 pb-1.5 w-7 h-7"/></li>
                <Link to="cart" className=" after:opacity-0 after:bg-gray-800  after:block after:border-b after:w-full hover:after:opacity-100 hover:text-gray-900"><ShoppingCart className="stroke-gray-700 hover:stroke-gray-800  pb-1.5 w-7 h-7"/> <span className="flex items-center justify-center  absolute top-13 right-32 text-sm bg-amber-400 border-2 border-amber-400 w-3 h-4 rounded">{Object.values(cart).reduce((sum, item) => item.quantity + sum, 0)}</span></Link>
                <li></li>
            </ul>
        </nav>
        
    </header>
    )
}