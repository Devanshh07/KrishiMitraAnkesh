import { farmersData } from "../constants";
import './Pricing.css'

const Farmers = () => {
  return (
    <div className="mt-10">
      <h2 id="ps" className="text-3xl sm:text-5xl lg:text-6xl text-center my-6 tracking-wide">
        Meet the Heart of Our Fields..
      </h2>
      <div className="flex flex-wrap">
        {farmersData.map((farmer, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/5 p-2">
            <div className="p-6 border border-blue-100 rounded-xl flex flex-col items-center h-[360px] justify-between">
              
              {/* Farmer Image with fixed size and cropping */}
              <div className="w-24 h-28 overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src={farmer.image}
                  alt={farmer.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <div className="text-lg font-bold text-white-900 mb-1">
                {farmer.name}
              </div>
              
              {/* Title */}
              <div className="text-green-700 mb-1">
                {farmer.title}
              </div>

              {/* Location */}
              <div className="text-gray-500 mb-3 text-sm">
                {farmer.location}
              </div>

              {/* Whatsapp Button */}
              <a
                href="https://wa.me/919752111646"
                className="inline-flex justify-center items-center text-center w-full h-8 p-3 tracking-tight text-lg bg-gradient-to-r from-green-300 to-green-500 hover:scale-105 hover:brightness-110 border border-green-300 rounded-lg transition duration-200 text-black font-semibold shadow"
                target="_blank" rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Farmers;
