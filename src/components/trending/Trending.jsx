import { TrendingCard } from "./TrendingCard";
import Link from "next/link";

export default function Trending({ articles }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-[30px] container">
        <h1 className="text-[#181A2A]  flex justify-start text-2xl font-bold">
          Trending
        </h1>

        <div className="flex justify-between gap-5 container">
          {articles.map((article) => {
            return (
              <Link
                rel="stylesheet"
                href={`/blogs/${article.id}`}
                className="w-1/4"
              >
                <TrendingCard article={article} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
