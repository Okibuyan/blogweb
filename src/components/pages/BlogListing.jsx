import BlogPost, { ArticleCard } from "../blog-post/ArticleCard";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function BlogListingPage() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <div className=" flex justify-center">
        <div className="container text-2xl font-bold">All Blog Post</div>
      </div>

      <BlogPost />
      <Footer />
    </div>
  );
}
