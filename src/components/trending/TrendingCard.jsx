export const TrendingCard = ({ article }) => {
  console.log(article);

  return (
    <div className="flex justify-center h-[320px]">
      <div className="container ">
        <div
          className=" h-[320px] flex items-end"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%),url(${article.cover_image})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
          }}
        >
          <div className="flex flex-col gap-4 p-7">
            <div className="flex">
              <div className=" px-2 py-1 bg-[#4B6BFB] items-center rounded-md text-xs capitalize text-white">
                {article.tag_list[0]}
              </div>
            </div>
            <p className="line-clamp-3 text-white font-semibold text-lg ">
              {article.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
