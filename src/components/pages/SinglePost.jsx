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
      <div>
        <div className="text-[36px] text-[#181A2A] font-semibold">
          {article?.title}
        </div>
      </div>

      <Footer />
    </div>
  );
}
