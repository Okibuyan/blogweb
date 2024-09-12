import Link from "next/link";
import { LogoIcon } from "@/components/svg/LogoIcon";
import { SearchIcon } from "@/components/svg/SearchIcon";
import { useEffect, useState } from "react";
import { SearchDropDown } from "@/components/drop-down/DropDown";

export const Header = ({ searchData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articlesForSearch, setArticlesForSearch] = useState([]);

  const fetchSearchData = async () => {
    try {
      const response = await fetch("https://dev.to/api/articles?per_page=100");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched articles:", data); // Log the fetched articles
      setArticlesForSearch(data);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };
  // const fetchData = () => {
  //   fetch("https://dev.to/api/articles")
  //     .then((response) => response.json())
  //     .then((data) => setSearchData(data));
  // };

  useEffect(() => {
    // fetchData();
    fetchSearchData();
  }, []);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className=" h-[100px] relative py-8 flex justify-center">
      <div className=" flex container items-center justify-between">
        <LogoIcon />
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
            aria-label="Search input"
            value={searchValue}
            className="text-[#A1A1AA] bg-[#F4F4F5] rounded-[5px] p-2 "
          />
          {searchValue && (
            <SearchDropDown
              articlesForSearch={articlesForSearch}
              searchValue={searchValue}
            />
          )}

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
