import Image from "next/image";
import Link from "next/link";
import display from "../../public/display.jpg";

export default function Home() {
  return (
    <main className="flex bg-white">
      <div className="p-24 flex gap-10 w-screen 2xl:h-[800px]">
        <div className="p-4 w-2/6 flex flex-col lg:gap-6 2xl:gap-8 2xl:justify-center">
          <h1 className="text-sm text-blue-500">INNOVATION</h1>
          <h1 className="lg:text-xl 2xl:text-4xl font-bold 2xl:leading-[50px]">Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
          </h1>
          <p className="lg:text-xs 2xl:text-md lg:leading-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex gap-4 items-center">
            <div className="h-10 w-10 bg-gray-500 rounded-full">
              <p>.</p>
            </div>
            <div>
              <h1 className="text-md">Adiat Rahman</h1>
              <p className="text-sm text-gray-500 font-light">Author</p>
            </div>
          </div>
          <Link href="#">
            <button className="btn btn-sm btn-outline">Read More</button>
          </Link>
        </div>
        <div className="w-2/3 relative">
          <Image src={display} alt="image1" className="object-cover rounded-md" fill />
        </div>
      </div>
    </main>
  );
}
