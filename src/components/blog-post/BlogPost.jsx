import Link from "next/link";
import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";

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
              <ArticleCard key={article.id} article={article} />
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
