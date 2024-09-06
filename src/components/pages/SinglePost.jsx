import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function SinglePostPage() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <div>
        <div className="text-[36px] text-[#181A2A] font-semibold">
          article.title
        </div>
      </div>

      <Footer />
    </div>
  );
}
