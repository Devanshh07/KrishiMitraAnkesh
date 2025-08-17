import { pricingOptions } from "../constants";
import './Pricing.css'

const Pricing = () => {
  return (
    <div className="mt-10">
      <h2 id="ps" className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Our Products..
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/5 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl flex flex-col items-center">
              
              {/* Image at top */}
              <img 
                src={option.image}
                alt="" 
                className="w-32 h-36 object-cover rounded-lg mb-6 shadow-md"
              />

              {/* Price Tag */}
              <div className =" text-green-700 px-6 py-3 rounded-md mb-8">
                <span className="text-3xl font-bold">{option.price}</span>
              </div>

              {/* Subscribe button */}
              <a
                href="https://wa.me/919752111646"
                className="inline-flex justify-center items-center text-center w-full h-8 p-5 mt-2 tracking-tight text-xl hover:bg-green-400 border border-green-300 rounded-lg transition duration-200"
              >
                Order
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
