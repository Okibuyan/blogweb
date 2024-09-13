import { generateMonth } from "../utils/months";

export const ArticleCardHomePage = ({ article }) => {
  const publishedDate = new Date(article.published_at);

  return (
    <div className="border-[#E8E8EA] rounded-xl border gap-4 p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4  ">
        {article.cover_image ? (
          <img
            src={article.cover_image}
            className="h-[240px] w-[400px] object-cover rounded-md"
          />
        ) : (
          <div className="h-[240px] w-[400px] flex items-center justify-center bg-gray-200 rounded-md">
            <p className="text-gray-500">No cover image found</p>
          </div>
        )}
        <div className="flex">
          {article.tag_list && article.tag_list.length > 0 ? (
            <div className="px-[10px] py-1   bg-[#4B6BFB0D] rounded-md capitalize text-[#4B6BFB] ">
              {article.tag_list[0]}
            </div>
          ) : (
            <div className="px-4 py-3  bg-[#4B6BFB0D] rounded-md capitalize text-[#4B6BFB] ">
              <p>No available tags</p>
            </div>
          )}
        </div>
        <div className="overflow-hidden w-[400px] h-[100px]">
          <p className="text-2xl font-semibold text-ellipsis text-justify ">
            {article.description}
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center pb-2 justify-between">
        <p className=" text-[#97989F] text-base font-normal">
          {generateMonth(publishedDate.getMonth())} {publishedDate.getDay()},{" "}
          {publishedDate.getFullYear()}
        </p>
      </div>
    </div>
  );
};
