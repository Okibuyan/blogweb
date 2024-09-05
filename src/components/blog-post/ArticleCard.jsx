import { useEffect, useState } from "react";

const ArticleCard = ({ article }) => {
  const publishedDate = new Date(article.published_at);

  const generatMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };
  return (
    <div className="w-[400px] h-[475px] border-[#E8E8EA] rounded-xl border p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <img
          src={article.cover_image}
          className="w-full h-[240px] object-cover rounded-md"
        />

        <div className="w-[100px] h-[30px] bg-[#4B6BFB0D] flex justify-center items-center rounded-md text-[#4B6BFB]">
          {article.tag_list[0]}
        </div>
        <div className="overflow-hidden h-[100px]">
          <p className="text-2xl font-semibold text-ellipsis ">
            {article.description}
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
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
          {generatMonth(publishedDate.getMonth())} {publishedDate.getDay()},{" "}
          {publishedDate.getFullYear()}
        </p>
      </div>
    </div>
  );
};
export default function BlogPost() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15); // State for visible articles

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 15); // Increase visible articles by 15
  };

  return (
    <div className="flex flex-col items-center w-ful gap-8 pb-16">
      <div className="container flex flex-wrap justify-between gap-5 ">
        {articles.slice(0, visibleCount).map((article) => {
          return <ArticleCard key={article.id} article={article} />;
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
