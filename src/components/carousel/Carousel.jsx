import { generateMonth } from "@/utils/months";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LeftIcon } from "../svg/LeftIcon";
import { RightIcon } from "../svg/RightIcon";

export default function Carousel() {
  const [article, setArticle] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return article.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };

  const handleRight = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === article.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };
  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=6&top=2")
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const publishedDate = new Date(article[currentIndex]?.published_at);

  return (
    <div className="flex flex-col">
      {" "}
      <div className="flex flex-col items-center">
        <div className="container h-[600px] w-full ">
          <Link href={`/blogs/${article[currentIndex]?.id}`}>
            <div
              className="rounded-xl flex items-end p-5 "
              style={{
                backgroundImage: `url(${article[currentIndex]?.cover_image})`,
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white rounded-xl w-1/2 flex flex-col  p-10 gap-6">
                <div className="flex">
                  <div className=" px-2 py-1 bg-[#4B6BFB] items-center rounded-md text-xs capitalize text-white">
                    {article[currentIndex]?.tag_list[0]}
                  </div>
                </div>
                <div className="text-[36px] line-clamp-2 font-semibold text-[#181A2A)]">
                  {article[currentIndex]?.title}
                </div>
                <p className=" text-[#97989F] text-base  font-normal">
                  {generateMonth(publishedDate.getMonth())}{" "}
                  {publishedDate.getDay()}, {publishedDate.getFullYear()}
                </p>
              </div>
            </div>
          </Link>
          <div className="flex justify-end gap-4 pt-4">
            <button
              onClick={handleLeft}
              className="h-10 w-10 border rounded-md flex justify-center items-center border-[#696A75]"
            >
              <LeftIcon />
            </button>
            <button onClick={handleRight}>
              <RightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
