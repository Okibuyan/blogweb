import { generateMonth } from "@/utils/months";
import Link from "next/link";
import { useEffect, useState } from "react";

const ArticleCard = ({ article }) => {
  const publishedDate = new Date(article.published_at);

  return (
    <div className="border-[#E8E8EA] rounded-xl border gap-4 p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4  ">
        <img
          src={article.cover_image}
          className="h-[240px] w-[400px] object-cover rounded-md"
        />

        <div className="px-4 py-3 block bg-[#4B6BFB0D] items-center rounded-md capitalize text-[#4B6BFB]">
          {article.tag_list[0]}
        </div>
        <div className="overflow-hidden w-[400px] h-[100px]">
          <p className="text-2xl font-semibold text-ellipsis text-justify ">
            {article.description}
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center pb-2 justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={article.user.profile_image_90}
            alt=""
            className="w-9 h-9 rounded-full"
          />
          <div className="text-[#97989F] text-base font-medium">
            {article.user.name}
          </div>
        </div>

        <p className=" text-[#97989F] text-base font-normal">
          {generateMonth(publishedDate.getMonth())} {publishedDate.getDay()},{" "}
          {publishedDate.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default function BlogPost() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); // State for visible articles

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12); // Increase visible articles by 15
  };

  return (
    <div className="flex flex-col items-center w-ful gap-8 pb-16">
      <div className="container flex flex-wrap justify-between gap-5 ">
        {articles.slice(0, visibleCount).map((article) => {
          return (
            <Link rel="stylesheet" href={`/blogs/${article.id}`}>
              <ArticleCard key={article.id} article={article} />;
            </Link>
          );
        })}
      </div>
      {visibleCount < articles.length && (
        <button
          onClick={handleLoadMore}
          className="mt-4 px-6 py-3 text-[#696A75] border border-opacity-30 text-base font-medium rounded-md border-[#696A75]"
        >
          Load More
        </button>
      )}
    </div>
  );
}
