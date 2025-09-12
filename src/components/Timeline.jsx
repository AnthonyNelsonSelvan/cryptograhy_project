import React from 'react';

const Timeline = () => {
  return (
    <div className="p-8 space-y-8 bg-white/70 rounded-3xl shadow-lg border border-gray-200 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center text-slate-800">Timeline of Cryptography</h2>
      <div className="relative">
        <div className="absolute left-1/2 w-1 h-full bg-slate-300 transform -translate-x-1/2"></div>
        <div className="space-y-12">
          <div className="flex justify-start items-center relative">
            <div className="w-6 h-6 rounded-full bg-slate-500 absolute left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className="w-1/2 p-4 pr-12 text-right bg-white/70 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-slate-700">Circa 4th Century BCE</h3>
              <p className="mt-2 text-slate-600">The Arthashastra, written by Kautilya (Chanakya), details techniques for secret communication, including a simple substitution cipher.</p>
            </div>
          </div>
          <div className="flex justify-end items-center relative">
            <div className="w-6 h-6 rounded-full bg-slate-500 absolute left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className="w-1/2 p-4 pl-12 text-left bg-white/70 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-slate-700">9th Century CE</h3>
              <p className="mt-2 text-slate-600">Al-Kindi, an Arab scholar, introduces the concept of frequency analysis, a revolutionary method for breaking substitution ciphers.</p>
            </div>
          </div>
          <div className="flex justify-start items-center relative">
            <div className="w-6 h-6 rounded-full bg-slate-500 absolute left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className="w-1/2 p-4 pr-12 text-right bg-white/70 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-slate-700">16th Century CE</h3>
              <p className="mt-2 text-slate-600">The Vigenère cipher is developed, using a polyalphabetic system to resist frequency analysis, earning it the title "le chiffre indéchiffrable" (the indecipherable cipher).</p>
            </div>
          </div>
          <div className="flex justify-end items-center relative">
            <div className="w-6 h-6 rounded-full bg-slate-500 absolute left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className="w-1/2 p-4 pl-12 text-left bg-white/70 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-slate-700">Early 20th Century</h3>
              <p className="mt-2 text-slate-600">The Enigma machine  is used by the German military during WWII. Its complex rotors created a highly secure cipher, which was eventually broken by Allied codebreakers.</p>
            </div>
          </div>
          <div className="flex justify-start items-center relative">
            <div className="w-6 h-6 rounded-full bg-slate-500 absolute left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className="w-1/2 p-4 pr-12 text-right bg-white/70 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-slate-700">Modern Era</h3>
              <p className="mt-2 text-slate-600">Public-key cryptography, based on the RSA algorithm, is invented. This breakthrough allows for secure communication without a pre-shared secret key, forming the backbone of modern digital security.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;