import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-[100px] w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
