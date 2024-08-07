import Image from "next/image";
import Link from "next/link";
import display from "../../public/display.jpg";

export default function Home() {
  return (
    <main className="flex bg-white">
      <div className="p-24 flex">
        <div className="p-4 w-2/5 flex flex-col gap-6">
          <h1 className="text-sm text-blue-500">INNOVATION</h1>
          <h1 className="text-xl font-bold">Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
          </h1>
          <p className="text-xs leading-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <div className="w-3/5 relative">
          <Image src={display} alt="image1" className="object-contain" height={100} width={700} />
        </div>
      </div>
    </main>
  );
}
