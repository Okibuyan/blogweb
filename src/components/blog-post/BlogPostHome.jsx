import Link from "next/link";
import { useEffect, useState } from "react";
import { ArticleCardHomePage } from "./ArticleCardHome";

const TAGS = ["All", "Design", "Travel", "Fashion", "Technoloy"];

export default function BlogPostHome({ articles }) {
  const [visibleCount, setVisibleCount] = useState(9); // State for visible articles

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9); // Increase visible articles by 9
  };

  return (
    <div className=" flex flex-col items-center gap-[30px]">
      <div className="container text-2xl font-bold">All Blog Post</div>

      <div className="text-[#495057] text-xs font-bold container flex gap-5">
        {TAGS.map((tag) => {
          return <p>{tag}</p>;
        })}
      </div>

      <div className="flex flex-col items-center w-ful gap-8 pb-16">
        <div className="container flex flex-wrap justify-between gap-5 ">
          {articles.slice(0, visibleCount).map((article) => {
            return (
              <Link key={article.id} href={`/blogs/${article.id}`}>
                <ArticleCardHomePage article={article} />
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
    </div>
  );
}
