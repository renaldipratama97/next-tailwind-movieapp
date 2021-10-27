import request from "../utils/request";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 space-x-10 sm:space-x-20 mx-auto whitespace-nowrap overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer hover:text-white transition duration-100 transform scale-100 active:text-red-500 last:pr-24"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}