import BlogPostHomepage from "../blog-post/ArticleCardHomepage";
import Carousel from "../carousel/Carousel";

import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import Trending from "../trending/Trending";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <Carousel />
      <Trending />
      <BlogPostHomepage />
      <Footer />
    </div>
  );
}
