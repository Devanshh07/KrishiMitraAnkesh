import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 id="bold"className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Your farm’s best friend —    <span id="bold" className="bg-gradient-to-r from-blue-600 to-blue-300 text-transparent bg-clip-text">
          {" "}
          KrishiMitraAnkesh.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your farming journey with our quality seeds, fertilizers, and tools. Get started today and turn your harvest dreams into reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-600 to-blue-200 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
         className="rounded-xl w-1/2 border mx-2 my-4 shadow-none focus:outline-none focus:ring-0"
  >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-xl w-1/2 border mx-2 my-4 shadow-none focus:outline-none focus:ring-0"

        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
