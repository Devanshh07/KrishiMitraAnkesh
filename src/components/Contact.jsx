import React from 'react'
import { Play, CircleFadingPlus, Smile, MessageCircle } from 'lucide-react';
function Contact() {
  return (
    <div className="max-w-2xl h-60 mx-auto p-10 bg-neutral-900 rounded-xl shadow-lg flex flex-col items-center space-y-4 mt-5 space-x-5 ">
      {/* Three rounded divs in a row */}
      <div className="flex flex-row space-x-4">
        <div className="relative w-20 h-20 flex justify-center items-center rounded-full text-green-500 group" >
          <div className="absolute inset-0 rounded-full border-2 border-gray-200 
                  before:content-[''] before:absolute before:inset-0 before:rounded-full 
                  before:border-2 before:border-green-500 before:scale-0 
                  before:transition-transform before:duration-500 before:ease-in-out 
                  group-hover:before:scale-100">
          </div>
          <Play /></div>
        <div className="relative w-20 h-20 flex justify-center items-center rounded-full text-green-500 group">
          <div className="absolute inset-0 rounded-full border-2 border-gray-200 
                  before:content-[''] before:absolute before:inset-0 before:rounded-full 
                  before:border-2 before:border-green-500 before:scale-0 
                  before:transition-transform before:duration-500 before:ease-in-out 
                  group-hover:before:scale-100">
          </div>
          <Smile /></div>
        <div className="relative w-20 h-20 flex justify-center items-center rounded-full text-green-500 group" >
          <div className="absolute inset-0 rounded-full border-2 border-gray-200 
                  before:content-[''] before:absolute before:inset-0 before:rounded-full 
                  before:border-2 before:border-green-500 before:scale-0 
                  before:transition-transform before:duration-500 before:ease-in-out 
                  group-hover:before:scale-100">
          </div>
          <CircleFadingPlus /></div>
        <div className="relative w-20 h-20 flex justify-center items-center rounded-full text-green-500 group" >
          <div className="absolute inset-0 rounded-full border-2 border-gray-200 
                  before:content-[''] before:absolute before:inset-0 before:rounded-full 
                  before:border-2 before:border-green-500 before:scale-0 
                  before:transition-transform before:duration-500 before:ease-in-out 
                  group-hover:before:scale-100">
          </div>
          <MessageCircle /></div>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-5 mt-4">
        <a href="https://facebook.com" target="_blank" className="text-sky-400 hover:text-sky-700 font-semibold">
          Youtube
        </a>
        <a href="https://twitter.com" target="_blank" className="text-sky-400 hover:text-sky-700 font-semibold">
          FaceBook
        </a>
        <a href="https://instagram.com" target="_blank" className="text-sky-400 hover:text-sky-700 font-semibold">
          Instagram
        </a>
        <a
          href="https://wa.me/918815383639"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-700 font-semibold transition-all duration-300 hover:underline"
        >
          WhatsApp
        </a>
      </div>
    </div>

  )
}

export default Contact