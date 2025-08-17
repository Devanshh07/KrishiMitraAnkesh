import React, { useEffect, useState } from "react";

const AutoSlideshow = ({ delay = 4000 }) => {
    const images = [
        "https://farmingfarmersfarms.com/wp-content/uploads/2023/12/farm-app2.png",
        "https://farmonaut.com/wp-content/uploads/2024/09/2-92.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Soil_carbon_cycle_through_the_microbial_loop.jpg/500px-Soil_carbon_cycle_through_the_microbial_loop.jpg",
        "https://i.pinimg.com/736x/7b/3e/53/7b3e535f1ec9b7dea53bd7eb70510f92.jpg",
        "https://capinnov.ca/wp-content/uploads/2020/09/digital-agriculture.png",
        "https://agriculturepost.com/wp-content/uploads/2023/09/Emerging-technologies-and-precision-farming-SaaS-to-design-future-landscape-for-agriculture.jpg",
        "https://doa.vi.gov/wp-content/uploads/2024/02/1.png",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, delay);
        return () => clearInterval(id);
    }, [delay, images.length]);

    return (
        <div className="w-full max-w-8xl mx-auto  overflow-hidden shadow-lg ">
            {/* Fixed-height stage so fades don’t collapse layout */}
            <div className="relative h-[400px] sm:h-[500px] bg-neutral-900 flex items-center justify-center">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`slide-${index}`}
                        loading="lazy"
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AutoSlideshow;
