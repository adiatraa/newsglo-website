import React from 'react';

export default function LoadingSkeleton() {
  return (
    <main className="bg-white">
      <div className="p-6 sm:p-12 md:p-16 lg:px-24 lg:py-10 lg:mb-4 flex flex-col lg:flex-row gap-6 lg:gap-10 w-full lg:h-[520px] 2xl:h-[810px]">
        <div className="p-4 w-full lg:w-2/6 flex flex-col gap-4 lg:gap-6 2xl:gap-8 2xl:justify-center">
          <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="flex gap-4 items-center">
            <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse"></div>
            <div>
              <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
              <div className="h-3 bg-gray-300 rounded w-16 animate-pulse"></div>
            </div>
          </div>
          <div className="h-8 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="w-full lg:w-2/3 relative bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      {/* Most Popular Article */}
      <div className="p-6 sm:p-10 md:p-16 lg:p-20 bg-[#F8F9FA] min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md flex flex-col h-full">
              <div className="relative w-full h-48 bg-gray-300 animate-pulse rounded-t-lg"></div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mt-2 animate-pulse flex-grow"></div>
                <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse flex-grow"></div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
                  <div className="h-8 w-24 bg-gray-300 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Video Preview Content */}
      <div className="p-6 pb-0 sm:p-10 md:p-16 lg:!pb-8 lg:p-20 bg-white w-full">
        <div className="flex justify-between mt-6">
          <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="pb-20">
        <div className="h-64 bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
    </main>
  );
}
