import BlogPost from "../blog-post/BlogPost";
import MainLayout from "../layout/MainLayout";

export default function BlogListingPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-12">
        <div className=" flex justify-center">
          <div className="container text-2xl font-bold">All Blog Post</div>
        </div>
        <BlogPost />
      </div>
    </MainLayout>
  );
}
