import Link from "next/link";
import { useEffect, useState } from "react";

export const SearchDropDown = ({
  articlesForSearch,
  isOpen,
  setIsOpen,
  setSearchValue,
  searchValue,
}) => {
  const filteredArticles = articlesForSearch
    .filter((article) =>
      article.title?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .slice(0, 5);

  // console.log("Filtered articles:", filteredArticles);

  // filteredArticles.length = 5;
  const handleClickLink = () => {
    setIsOpen(false);
    setSearchValue("");
  };

  return (
    <div>
      <div
        className={`${
          isOpen ? "h-100%" : "hidden"
        } flex flex-col transition-all duration-200 overflow-hidden absolute bg-gray-50 border border-gray-200 rounded-md`}
      >
        {filteredArticles.map((article) => (
          <Link
            onClick={handleClickLink}
            href={`/blogs/${article?.id}`}
            key={article?.id}
          >
            <div className="border-b-2 border-gray-100 hover:bg-gray-200 p-2 cursor-pointer">
              {article?.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchDropDown;
