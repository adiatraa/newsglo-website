import React from 'react';
import Image from 'next/image';
import display from '../../../public/display.jpg'; // Ensure this path is correct
import Link from 'next/link';
import TrendingCarousel from '@/components/TrendingSlide';

export default function CategoryPage() {
  return (
    <div>
      <div className="relative bg-gray-900 text-white">
        {/* Hero Section */}
        <div className="relative h-[320px] sm:h-[420px] md:h-[520px] 2xl:h-[810px]">
          <Image
            src={display}
            alt="Display Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-50"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:pl-16 2xl:pl-24">
            <div className="max-w-lg">
              <p className="text-sm sm:text-md font-semibold mb-4 sm:mb-6">Sports</p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-tight">
                Defensive rocks Dias and Stones dig Man City out of hole to make it 20 wins in a row
              </h1>
              <div className="flex items-center mt-3 sm:mt-4">
                <p className="text-xs">Author</p>
                <span className="mx-1">|</span>
                <p className="text-xs sm:text-sm">Hula Hula</p>
              </div>
              <button className="mt-4 sm:mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Side Section */}
        <div className="hidden lg:absolute lg:max-w-sm lg:flex lg:flex-col lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:mr-8 2xl:mr-16 p-4 space-y-4 mt-8 lg:mt-0">
          <Link href="#">
            <div className="bg-transparent hover:bg-gray-800 hover:rounded-sm hover:bg-opacity-40 p-4 rounded-lg">
              <p className="uppercase text-xs font-semibold">Sports</p>
              <h2 className="text-sm sm:text-lg font-semibold">
                Coronavirus: Warning over easing lockdown measures too quickly
              </h2>
              <div className="flex items-center mt-2">
                <p className="text-xs">Author</p>
                <span className="mx-1">|</span>
                <p className="text-xs">Hula Hula</p>
              </div>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-transparent hover:bg-gray-800 hover:rounded-sm hover:bg-opacity-40 p-4 rounded-lg">
              <p className="uppercase text-xs font-semibold">Sports</p>
              <h2 className="text-sm sm:text-lg font-semibold">
                Coronavirus: Warning over easing lockdown measures too quickly
              </h2>
              <div className="flex items-center mt-2">
                <p className="text-xs">2 Hours</p>
                <span className="mx-1">|</span>
                <p className="text-xs">Author Hula Hula</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Trending Slide */}
      <div className='py-12 bg-white'>
        <TrendingCarousel />
      </div>
    </div>
  );
}
