import { LogoIcon } from "../svg/LogoIcon";
import { SearchIcon } from "../svg/SearchIcon";

export const Header = () => {
  return (
    <div className=" h-[100px]  py-8 flex justify-center">
      <div className=" flex container items-center justify-between">
        <LogoIcon />
        <div className="text-[#3B3C4A]  text-base font-normal flex gap-10">
          <a href="#home">Home</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="h-9 w-[166px]  flex gap-1">
          <input
            type="text"
            placeholder="Search"
            className="text-[#A1A1AA] bg-[#F4F4F5] rounded-[5px] p-2 "
          />
          <div className="absolute pl-[165px] pt-[10px] ">
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
