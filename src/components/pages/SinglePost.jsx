import BlogPostHomepage from "../blog-post/ArticleCardHomepage";
import BlogPost, { ArticleCard } from "../blog-post/ArticleCard";
import { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { useRouter } from "next/router";

export default function SinglePostPage() {
  const router = useRouter();

  const [article, setArticle] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(article);
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
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
            </div>
          </div>
          <div>
            <img
              src={article?.cover_image}
              alt=""
              className="w-full no-repeat"
            />
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
