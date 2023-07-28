import React from 'react';
import photo1 from '../../assets/photo1.png';
import photo2 from '../../assets/photo2.png';
import photo3 from '../../assets/photo3.png';
import photo4 from '../../assets/photo4.png';
import photo5 from '../../assets/photo5.png';
import photo6 from '../../assets/photo6.png';
import photo7 from '../../assets/photo7.png';

const PhotoSpeaks = () => {
  return (
    <div>
      <div className="text-3xl text-center font-bold mb-3 md:mb-0">
        Photo Speaks
      </div>
      <div className="text-lg mb-10 mt-3 text-center flex flex-col justify-center items-center">
        TXE summit 2022
        <div className="flex space-x-2 mt-2">
          <div className="w-10 h-2 rounded-full bg-orange-500"></div>
          <div className="w-10 h-2 rounded-full bg-black"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 px-8 md:px-20">
        <div className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
          <img
            src={photo1}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
          <img
            src={photo2}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
          <img
            src={photo3}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
          <img
            src={photo4}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 px-8 md:px-20 mt-2">
        <div className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
          <img
            src={photo5}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
          <img
            src={photo6}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
          <img
            src={photo7}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoSpeaks;
