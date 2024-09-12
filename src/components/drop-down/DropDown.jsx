import Link from "next/link";
import { useEffect, useState } from "react";

export const SearchDropDown = ({ articlesForSearch, searchValue }) => {
  // const [articles, setArticles] = useState([]);
  // const [searchValue, setSearchValue] = useState("");

  const filteredArticles = articlesForSearch
    .filter((article) =>
      article.title?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .slice(0, 5);

  console.log("Filtered articles:", filteredArticles);

  // filteredArticles.length = 5;

  // const fetchData = () => {
  //   fetch("https://dev.to/api/articles")
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const handleInputChange = (event) => {
  //   setSearchValue(event.target.value);
  // };
  // useEffect(() => {
  //   setSearchValue("");
  // }, []);

  return (
    <div>
      {/* <input
        onChange={handleInputChange}
        className="border border-red-500"
        type="text"
      />
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Search"
        className="text-[#A1A1AA] bg-[#F4F4F5] rounded-[5px] p-2 "
      /> */}
      <div
        className={`${
          filteredArticles?.length ? "h-[200px]" : "h-0"
        } flex flex-col transition-all duration-200 overflow-hidden absolute bg-gray-50 border border-gray-200 rounded-md`}
      >
        {filteredArticles?.length ? (
          filteredArticles.map((article) => (
            <Link href={`/blogs/${article?.id}`} key={article?.id}>
              <div className="border-b-2 border-gray-100 hover:bg-gray-200 p-2 cursor-pointer">
                {article?.title}
              </div>
            </Link>
          ))
        ) : (
          <div className="p-2 text-gray-500">No articles found</div>
        )}
      </div>
    </div>
  );
};

export default SearchDropDown;
