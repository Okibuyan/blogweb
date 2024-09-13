import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import AllBlogPost from "../blog-post/AllBlogPost";

export default function BlogListingPage() {
  const [allBlogPageArticles, setAllBlogPageArticles] = useState([]);

  const fetchAllBlogPageData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setAllBlogPageArticles(data));
  };
  useEffect(() => {
    fetchAllBlogPageData();
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col gap-12">
        <div className=" flex justify-center">
          <div className="container text-2xl font-bold">All Blog Post</div>
        </div>
        <AllBlogPost articles={allBlogPageArticles} />
      </div>
    </MainLayout>
  );
}
