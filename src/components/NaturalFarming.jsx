import React from "react";
import nf1 from '../assets/nf1.webp'
import nf2 from '../assets/nf2.jpg'
import nf3 from '../assets/nf3.jpg'
import nf4 from '../assets/nf4.png'
import nf5 from '../assets/nf5.jpg'
import nf6 from '../assets/nf6.jpg'
import nf7 from '../assets/nf7.jpg'


const naturalFarmingImages = [
    nf1, nf2, nf3, nf4, nf5, nf6, nf7
];

const NaturalFarmingImages = () => (
    <div className="mt-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-blue-700">
            Embracing Natural Farming Practices
        </h2>
        <p className="text-sm text-center text-white mb-10">
            Sustainable methods that work in harmony with nature to nurture healthy soil, crops, and communities.
        </p>
        <div className="flex flex-wrap justify-center">
            {naturalFarmingImages.map((src, idx) => (
                <div
                    key={idx}
                    className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
                >
                    <div className="rounded-xl overflow-hidden shadow-lg border border-green-200 bg-white w-[500px] h-[340px] flex items-center justify-center">
                        <img
                            src={src}
                            alt={`Natural Farming ${idx + 1}`}
                            className="w-[550px] h-[400px] object-center object-cover"
                        />
                    </div>

                </div>
            ))}
        </div>
    </div>
);

export default NaturalFarmingImages;
