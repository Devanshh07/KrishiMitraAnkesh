import React from "react";
import gl1 from '../assets/Gallery/gl1.avif'
import gl2 from '../assets/Gallery/gl2.avif'
import gl3 from '../assets/Gallery/gl3.jpg'
import gl4 from '../assets/Gallery/gl4.jpg'
import gl5 from '../assets/Gallery/gl5.jpg'



const photo = [
    gl1, gl2, gl3, gl4, gl5, 
];

const Gallery = () => (
    <div className="mt-10">
        <h2 id="ps" className="text-3xl sm:text-5xl lg:text-6xl text-center my-6 tracking-wide">
            Some glimps with our farmers..
        </h2>
        
        <div className="flex flex-wrap justify-center">
            {photo.map((src, idx) => (
                <div
                    key={idx}
                    className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
                >
                    <div className="rounded-xl overflow-hidden shadow-lg border border-green-200 bg-white w-[500px] h-[340px] flex items-center justify-center">
                        <img
                            src={src}
                            alt={`Gallery ${idx + 1}`}
                            className="w-[550px] h-[400px] object-center object-cover"
                        />
                    </div>

                </div>
            ))}
        </div>
    </div>
);

export default Gallery;
