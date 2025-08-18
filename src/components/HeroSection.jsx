import farm2 from "../assets/farm2.mp4"
import farm4 from "../assets/farm4.mp4"


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 id="bold" className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
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
    href="https://wa.me/919752111646"
    className="relative py-2 px-6 mx-3 rounded-md border border-green-600 text-green-600 font-medium
      transition-all duration-300 ease-in-out
      hover:bg-gradient-to-r hover:from-green-600 hover:to-green-400 hover:text-white
      hover:shadow-lg hover:shadow-green-500/50 hover:scale-105"
  >
    Whatsapp me
  </a>

  <a
    href="https://www.google.com/maps/place/Kabir+krishi+Kendra/@22.1401266,79.753714,17z/data=!3m1!4b1!4m6!3m5!1s0x3a2a9952b8f353b9:0x3218f8781794e191!8m2!3d22.1401217!4d79.7562889!16s%2Fg%2F11lc9gdg0p?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
    className="relative py-2 px-6 mx-3 rounded-md border border-blue-600 text-blue-700 font-medium
      transition-all duration-300 ease-in-out
      hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white
      hover:shadow-lg hover:shadow-gray-500/50 hover:scale-105"
  >
    Visit my shop
  </a>
</div>


      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-xl w-1/2 border mx-2 my-4 shadow-none focus:outline-none focus:ring-0"
        >
          <source src={farm2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-xl w-1/2 border mx-2 my-4 shadow-none focus:outline-none focus:ring-0"

        >
          <source src={farm4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
