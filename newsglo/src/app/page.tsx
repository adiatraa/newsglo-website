import Image from "next/image";
import Link from "next/link";
import display from "../../public/display.jpg";
import { VideoCarousel } from '../components/VideoCarousel';
import { ArticlePopular } from "@/types";

//Fetch Most Popular Articles
async function getData() {
  const res = await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=' + process.env.NEXT_PUBLIC_NEWS_API_KEY, 
  {cache: 'no-cache'});

  if (!res.ok) {
    throw new Error('Could not fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data: ArticlePopular = await getData();
  const articles = data.results;
  const heroArticle = articles[17];

  return (
    <main className="bg-white">
      <div className="p-6 sm:p-12 md:p-16 lg:px-24 lg:py-10 lg:mb-4 flex flex-col lg:flex-row gap-6 lg:gap-10 w-full lg:h-[520px] 2xl:h-[810px]">
        {/* Hero Section */}
        <div className="p-4 w-full lg:w-2/6 flex flex-col gap-4 lg:gap-6 2xl:gap-8 2xl:justify-center">
          <h1 className="text-xs sm:text-sm text-blue-500">{heroArticle.section.toUpperCase()}</h1>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold leading-tight lg:leading-normal 2xl:leading-[50px]">
            {heroArticle.title}
          </h1>
          <p className="text-xs sm:text-sm lg:text-base 2xl:text-md leading-5 lg:leading-6 text-justify">
            {heroArticle.abstract}
          </p>
          <div className="flex gap-4 items-center">
            <div>
              <h1 className="text-sm md:text-md">{heroArticle.byline}</h1>
              <p className="text-xs md:text-sm text-gray-500 font-light">Author</p>
            </div>
          </div>
          <Link href={heroArticle.url} target="_blank">
            <button className="btn btn-sm btn-outline hover:bg-black">Read More</button>
          </Link>
        </div>
        <div className="w-full lg:w-2/3 relative">
          <Image
            src={heroArticle?.media[0] && heroArticle?.media[0]["media-metadata"][2].url}
            alt={heroArticle.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
      {/* Most Popular Article */}
      <div className="p-6 sm:p-10 md:p-16 lg:p-20 bg-[#F8F9FA] min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm sm:text-lg text-black">Most Popular Articles</h2>
          <Link href="#">
            <button className="btn btn-sm btn-outline hover:bg-black rounded-sm">Read More</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="overflow-hidden bg-white rounded-lg shadow-md flex flex-col h-full">
              <div className="relative w-full h-48">
                <Image
                  src={article?.media[0] && article?.media[0]["media-metadata"][2].url}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-medium text-blue-500 uppercase">{article.section}</span>
                <a href="#" className="block mt-2 text-sm sm:text-base font-semibold text-black hover:underline flex-grow">
                  {article.title}
                </a>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 flex-grow">
                  {article.abstract}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    
                    <div className="ml-3">
                      <a href="#" className="text-xs sm:text-sm font-semibold text-black">{article.byline}</a>
                      <span className="block text-xs text-gray-600">Author</span>
                    </div>
                  </div>
                  <Link href={article.url} target="_blank">
                    <button className="btn btn-sm btn-outline hover:bg-black rounded-sm">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* Video Preview Content */}
      <div className="p-6 pb-0 sm:p-10 md:p-16 lg:!pb-8 lg:p-20 bg-white w-full">
        <div className="flex justify-between mt-6">
          <h2 className="text-sm sm:text-lg text-black">Videos</h2>
          <button className="btn btn-sm btn-outline hover:bg-black rounded-sm">Load More</button>
        </div>
      </div>
      <div className="pb-20">
        <VideoCarousel />
      </div>
    </main>
  );
}
