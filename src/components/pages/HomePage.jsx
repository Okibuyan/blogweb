import BlogPostHomepage from "../blog-post/BlogPostHome";
import Carousel from "../carousel/Carousel";
import MainLayout from "../layout/MainLayout";
import Trending from "../trending/Trending";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-[100px]">
        <Carousel />
        <Trending />
        <BlogPostHomepage />
      </div>
    </MainLayout>
  );
}
