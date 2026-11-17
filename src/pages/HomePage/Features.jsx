export default function Features() {

    return(
        <div className="flex flex-col gap-15 leading-7 text-2xl text-gray-800 h-100">
        <h2 className="text-5xl font-bold">Features</h2>
        <div>
            <ul className="flex gap-8 text-gray-700">
                <li className="flex flex-col w-300  h-48 gap-2 bg-amber-50 px-3 pt-4 "> <span className="font-bold"> Fast & Reliable Delivery: </span> <span className="leading-8"> Get your orders delivered right to your doorstep in as little as 24 hours.</span></li>
                <li className="flex flex-col w-300 h-48 gap-2  px-3 pt-4 "> <span  className="font-bold" >Curated Quality:</span> <span className="leading-8">We partner with trusted brands and check every item so you don't have to worry.</span> </li>
                <li  className="flex flex-col w-300  h-48 gap-2 bg-amber-50 px-3 pt-4 "> <span  className="font-bold"> Easy 14-Day Returns:</span> <span className="leading-8">Changed your mind? Send it back for a full refund with no awkward questions.</span> </li>
                <li  className="flex flex-col w-300 h-48 gap-2  px-3 pt-4 "> <span className="font-bold">Secure Checkout:</span> <span className="leading-8">Pay safely online with encrypted payments or choose cash on delivery.</span> </li>
            </ul>
        </div>
        </div>
    )
}