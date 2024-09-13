import { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import MainLayout from "../layout/MainLayout";
import Trending from "../trending/Trending";
import BlogPostHome from "../blog-post/BlogPostHome";

export default function HomePage() {
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [carouselArticles, setCarouselArticles] = useState([]);
  const [blogPostArticles, setBlogPostArticles] = useState([]);

  const fetchTrendingData = () => {
    fetch("https://dev.to/api/articles?per_page=4&top=2")
      .then((response) => response.json())
      .then((data) => setTrendingArticles(data));
  };

  const fetchCarouselData = () => {
    fetch("https://dev.to/api/articles?per_page=6&top=2")
      .then((response) => response.json())
      .then((data) => setCarouselArticles(data));
  };

  const fetchBlogPostData = () => {
    fetch("https://dev.to/api/articles/latest")
      .then((response) => response.json())
      .then((data) => setBlogPostArticles(data));
  };

  useEffect(() => {
    fetchBlogPostData();
    fetchTrendingData();
    fetchCarouselData();
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col gap-[100px]">
        <Carousel article={carouselArticles} />
        <Trending articles={trendingArticles} />
        <BlogPostHome articles={blogPostArticles} />
      </div>
    </MainLayout>
  );
}
