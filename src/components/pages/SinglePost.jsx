import BlogPostHomepage from "../blog-post/ArticleCardHome";
import BlogPost, { ArticleCard } from "../blog-post/ArticleCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import MainLayout from "../layout/MainLayout";
import { generateMonth } from "../utils/months";

export default function SinglePostPage() {
  const router = useRouter();
  const id = router.query.id;
  const [article, setArticle] = useState([]);
  const publishedDate = new Date(article.published_at);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <MainLayout>
      <div className="flex flex-col gap-[100px]">
        <div className="flex flex-col items-center">
          <div className="w-[800px] flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="text-[36px] text-[#181A2A] font-semibold">
                {article?.title}
              </div>
              <div className="flex gap-5 items-center pb-2 justify-between">
                <div className="flex gap-3 items-center">
                  <img
                    src={article.user?.profile_image_90}
                    alt=""
                    className="w-9 h-9 rounded-full"
                  />
                  <div className="text-[#97989F] text-base font-medium">
                    {article.user?.name}
                  </div>
                </div>
                <p className=" text-[#97989F] text-base font-normal">
                  {generateMonth(publishedDate.getMonth())}{" "}
                  {publishedDate.getDay()}, {publishedDate.getFullYear()}
                </p>
              </div>
            </div>
            <div>
              {article.cover_image ? (
                <img
                  src={article?.cover_image}
                  alt=""
                  className="w-full no-repeat h-[462px] rounded-xl"
                />
              ) : (
                <div className="w-full h-[462px] rounded-xl bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">No cover image found</p>
                </div>
              )}
            </div>
            <div>
              <p>
                Traveling is an enriching experience that opens up new horizons,
                exposes us to different cultures, and creates memories that last
                a lifetime. However, traveling can also be stressful and
                overwhelming, especially if you don't plan and prepare
                adequately. In this blog article, we'll explore tips and tricks
                for a memorable journey and how to make the most of your
                travels. One of the most rewarding aspects of traveling is
                immersing yourself in the local culture and customs. This
                includes trying local cuisine, attending cultural events and
                festivals, and interacting with locals. Learning a few phrases
                in the local language can also go a long way in making
                connections and showing respect.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Research Your Destination
              </h1>
              <p>
                Before embarking on your journey, take the time to research your
                destination. This includes understanding the local culture,
                customs, and laws, as well as identifying top attractions,
                restaurants, and accommodations. Doing so will help you navigate
                your destination with confidence and avoid any cultural faux
                pas. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. In hendrerit gravida rutrum quisque non tellus orci ac
                auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
                amet. Aenean euismod elementum nisi quis eleifend quam
                adipiscing vitae. Viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="mb-24">
              <h1 className="text-2xl font-semibold">Plan Your Itinerary</h1>
              <p>
                While it's essential to leave room for spontaneity and
                unexpected adventures, having a rough itinerary can help you
                make the most of your time and budget. Identify the must-see
                sights and experiences and prioritize them according to your
                interests and preferences. This will help you avoid
                overscheduling and ensure that you have time to relax and enjoy
                your journey. Vitae sapien pellentesque habitant morbi
                tristique. Luctus venenatis lectus magna fringilla. Nec
                ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
                sodales neque sodales ut etiam sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
