import MainLayout from "../layout/MainLayout";

export default function ErrorPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-[100px]">
        <div className="flex gap-10 justify-center">
          <div className="text-7xl font-normal">404</div>
          <div className="bg-[#E8E8EA] w-[1px] h-[156px]"></div>
          <div className="flex flex-col gap-5 w-[392px]">
            <div className="text-2xl font-semibold">Page Not Found</div>
            <div className="text-lg font-normal text-[#696A75]">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </div>
            <div>
              <button className="py-[10px] px-4 rounded-md bg-[#4B6BFB] text-white">
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
