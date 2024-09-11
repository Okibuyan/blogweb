import Link from "next/link";
import { LogoIcon } from "@/components/svg/LogoIcon";
import { SearchIcon } from "@/components/svg/SearchIcon";

export const Header = () => {
  return (
    <div className=" h-[100px]  py-8 flex justify-center">
      <div className=" flex container items-center justify-between">
        <LogoIcon />
        <div className="text-[#3B3C4A]  text-base font-normal flex gap-10">
          <Link href="/">Home</Link>
          <Link href="blogs">Blog</Link>
          <Link href="contact-us">Contact</Link>
        </div>
        <div className="h-9 flex gap-1 relative">
          <input
            type="text"
            placeholder="Search"
            className="text-[#A1A1AA] bg-[#F4F4F5] rounded-[5px] p-2 "
          />
          <div className="absolute right-2 top-[10px]  ">
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
