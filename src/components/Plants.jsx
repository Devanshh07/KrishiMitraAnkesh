import { plantsData } from "../constants";
import './Pricing.css'

const Plants = () => {
  return (
    <div className="mt-10">
      <h2 id="ps" className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Innovative Plants Developed in Indian Labs
      </h2>
      <div className="flex flex-wrap">
        {plantsData.map((plant, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/5 p-2">
            <div className="p-8 border border-green-100 rounded-xl flex flex-col items-center h-[480px] justify-between">
              
              {/* Plant Image with fixed size and cropping */}
              <div className="w-32 h-40 overflow-hidden rounded-lg shadow-md mb-6">
                <img 
                  src={plant.image}
                  alt={plant.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Plant Name (white) */}
              <div className="text-lg font-bold text-white mb-2">
                {plant.name}
              </div>
              
              {/* Plant Type/Title */}
              <div className="text-green-700 mb-2">
                {plant.title}
              </div>

              {/* Description */}
              <div className="text-gray-500 mb-3 text-sm text-center">
                {plant.description}
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

export default Plants;
