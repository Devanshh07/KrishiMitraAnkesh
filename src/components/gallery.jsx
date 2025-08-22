import React, { useState, useEffect } from "react";
import gl1 from '../assets/Gallery/gl1.avif';
import gl2 from '../assets/Gallery/gl2.avif';
import gl3 from '../assets/Gallery/gl3.jpg';
import gl4 from '../assets/Gallery/gl4.jpg';
import gl5 from '../assets/Gallery/gl5.jpg';

const photos = [gl1, gl2, gl3, gl4, gl5];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 3000); // 3000ms = 3s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-10 mb-5">
            <h2 id="ps" className="text-3xl sm:text-5xl lg:text-6xl text-center my-6 tracking-wide">
                Some glimps with our farmers..
            </h2>

            <div className="flex justify-center">
                <div className="rounded-xl overflow-hidden shadow-lg border border-green-200 bg-white w-[800px] h-[440px] flex items-center justify-center transition-all duration-700">
                    <img
                        src={photos[currentIndex]}
                        alt={`Gallery ${currentIndex + 1}`}
                        className="w-[800px] h-[440px] object-center object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
