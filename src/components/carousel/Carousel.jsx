import { generateMonth } from "@/utils/months";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [article, setArticle] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=6&top=2")
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const publishedDate = new Date(article[0]?.published_at);

  return (
    <Link rel="stylesheet" href={`/blogs/${article.id}`}>
      <div className="flex flex-col items-center">
        <div className="container  h-[600px] w-full ">
          <div
            className="rounded-xl flex items-end p-5 "
            style={{
              backgroundImage: `url(${article[0]?.cover_image})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-white  w-1/2 flex flex-col  p-10 gap-6">
              <div className="flex">
                <div className=" px-2 py-1 bg-[#4B6BFB] items-center rounded-md text-xs capitalize text-white">
                  {article[0]?.tag_list[0]}
                </div>
              </div>
              <div className="text-[36px] line-clamp-2 font-semibold text-[#181A2A)]">
                {article[0]?.title}
              </div>
              <p className=" text-[#97989F] text-base  font-normal">
                {generateMonth(publishedDate.getMonth())}{" "}
                {publishedDate.getDay()}, {publishedDate.getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
