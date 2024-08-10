import React from 'react';
import Image from 'next/image';
import display from '../../../../public/display.jpg'; 
import Link from 'next/link';
import TrendingCarousel from '@/components/TrendingSlide';
import { ArticleCategory } from '@/categoryTypes';

async function getData(category: string) {
  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk%3A("${category}")&api-key=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);

  if (!res.ok) {
    throw new Error('Could not fetch data');
  }
  return res.json();
}

export default async function Page({ params }: { params: { categoryName: string } }) {
  const data: ArticleCategory = await getData(params.categoryName);
  const articles = data.response.docs; 
  const heroArticle = articles[0];
  const sideArticles = articles.slice(1, 3);

  return (
    <div>
      <div className="relative bg-gray-900 text-white">
        {/* Hero Section */}
        <div className="relative h-[320px] sm:h-[420px] md:h-[520px] 2xl:h-[810px]">
          <Image
            src={display}
            alt={heroArticle?.headline.main}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-50"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:pl-16 2xl:pl-24">
            <div className="max-w-lg">
              <p className="text-sm sm:text-md font-semibold mb-4 sm:mb-6">{heroArticle.section_name}</p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-tight">
                {heroArticle.headline.main}
              </h1>
              <div className="flex items-center mt-3 sm:mt-4">
                <p className="text-xs">{heroArticle.byline.original}</p>
              </div>
              <Link href={heroArticle.web_url} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 sm:mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Side Section */}
        <div className="hidden lg:absolute lg:max-w-sm lg:flex lg:flex-col lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:mr-8 2xl:mr-16 p-4 space-y-4 mt-8 lg:mt-0">
          {sideArticles.map((article, index) => (
            <Link key={index} href={article.web_url} target="_blank" rel="noopener noreferrer">
              <div className="bg-transparent hover:bg-gray-800 hover:rounded-sm hover:bg-opacity-40 p-4 rounded-lg">
                <p className="uppercase text-xs font-semibold">{article.section_name}</p>
                <h2 className="text-sm sm:text-lg font-semibold">
                  {article.headline.main}
                </h2>
                <div className="flex items-center mt-2">
                  <p className="text-xs">{article.byline.original}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Trending Slide */}
      <div className='py-12 bg-white'>
        <TrendingCarousel />
      </div>
      
      {/* Most Popular Article */}
      <div className="p-6 sm:p-10 md:p-16 lg:p-20 bg-[#F8F9FA] min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm sm:text-lg text-black">Our Latest Posts</h2>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-sm btn-outline hover:bg-black rounded-sm">Read More</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(3).map((article, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md flex flex-col h-full">
              <div className="relative w-full h-48">
                <Image
                  src={display}
                  alt={article.headline.main}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-medium text-blue-500 uppercase">{article.section_name}</span>
                <a href={article.web_url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-sm sm:text-base font-semibold text-black hover:underline">
                  {article.headline.main}
                </a>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 flex-grow">
                  {article.abstract}
                </p>
                <div className="mt-4 flex items-center space-x-8 sm:space-x-12 lg:space-x-20 2xl:space-x-48">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gray-500 rounded-full">
                      <p>.</p>
                    </div>
                    <div className="ml-3">
                      <a href={article.web_url} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-black">{article.byline.original}</a>
                      <span className="block text-xs text-gray-600">Author</span>
                    </div>
                  </div>
                  <Link href={article.web_url} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-sm btn-outline hover:bg-black rounded-sm">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
