import { CheckCircle2 } from "lucide-react";
import justCheck from "../assets/justCheck.mp4"
import { checklistItems } from "../constants";
import React, { useRef, useEffect } from "react";
import './workflow.css'

const Workflow = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        video.pause();
        video.currentTime = video.duration;
      };
    }
  }, [])
  return (
    <div className="mt-20">
      <h2 id="fastTrack" className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Fast-Track Your {" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-200 text-transparent bg-clip-text">
          Farm Success.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <video
            ref={videoRef}
            src={justCheck}
            alt="Coding"
            className="w-full h-auto"
            autoPlay
            controls
            muted
            playsInline
          />
        </div>


        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
