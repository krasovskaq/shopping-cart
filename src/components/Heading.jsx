import { Link } from "react-router"
export default function Heading({cart}) {
    

    return (

    <header  className="select-none flex flex-row justify-between p-5">
        <nav >
            <ul className="flex flex-row gap-10">
                <Link to="home">Home</Link>
                <Link to="shop">Shop</Link>
            </ul>
        </nav>
    
        <div>Logo</div>

        <nav>
            <ul className="flex flex-row gap-10">
                <li>Search</li>
                <Link to="cart">Cart <span>{cart.reduce((sum, item) => item.quantity + sum, 0)}</span></Link>
                <li></li>
            </ul>
        </nav>
        
    </header>
    )
}