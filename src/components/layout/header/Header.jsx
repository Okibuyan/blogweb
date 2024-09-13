import Link from "next/link";
import { LogoIcon } from "@/components/svg/LogoIcon";
import { SearchIcon } from "@/components/svg/SearchIcon";
import { useEffect, useState } from "react";
import { SearchDropDown } from "@/components/drop-down/DropDown";

export const Header = ({ searchData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articlesForSearch, setArticlesForSearch] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  if (typeof window !== "undefined") {
    document.addEventListener("mouseup", () => {
      handleCloseDropDown();
    });
  }
  const handleCloseDropDown = () => {
    setIsOpen(false);
  };
  const fetchSearchData = async () => {
    try {
      const response = await fetch("https://dev.to/api/articles?per_page=100");
      const data = await response.json();
      setArticlesForSearch(data);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  useEffect(() => {
    fetchSearchData();
  }, []);

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  return (
    <div className=" relative py-8 flex justify-center">
      <div className=" flex container items-center justify-between">
        <Link href="/">
          <LogoIcon />
        </Link>

        <div className="text-[#3B3C4A]  text-base font-normal flex gap-10">
          <Link href="/">Home</Link>
          <Link href="blogs">Blog</Link>
          <Link href="contact-us">Contact</Link>
        </div>
        <div className="h-9 flex flex-col gap-1 relative">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Search"
            value={searchValue}
            className="text-[#A1A1AA] bg-[#F4F4F5] rounded-[5px] p-2 "
          />
          <SearchDropDown
            articlesForSearch={articlesForSearch}
            setSearchValue={setSearchValue}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            searchValue={searchValue}
          />
          <div className="absolute right-2 top-[10px]  ">
            <button aria-label="Search button">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
