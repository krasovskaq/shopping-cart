export default function HeroSection() {
    return (
        <div className="flex flex-col gap-15 leading-8 h-100">
            <h1 className="  font-bold text-5xl text-gray-800 border-l-5 pl-2 after:absolute after:bg-amber-200 w-full"> Everything you need, all in one place.</h1>
            <div className="flex flex-col gap-20">
            <p className="  text-2xl w-235 break-normal leading-10">Discover thousands of everyday essentials, from tech gadgets to cozy home goods. Fast shipping, fair prices, and zero hassle.</p>
           <div className="flex justify-between">      
            <button className="bg-black text-white cursor-pointer w-75 px-2 py-2 hover:scale-98 transition-scale">Shop Now</button>
            <button className="bg-black text-white  cursor-pointer w-75 px-2 py-2 hover:scale-98 transition-scale">Explore New Arrivals</button>
            </div>
            </div>
        </div>
    )
}