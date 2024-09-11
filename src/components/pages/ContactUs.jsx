import MainLayout from "../layout/MainLayout";

export default function ContactUsPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-[100px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-5 items-center h-[375px]">
            <div className="flex flex-col gap-5 w-[624px]">
              <h1 className="text-[36px] font-semibold">Contact Us</h1>
              <p className="text-[#696A75] text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="flex justify-between w-[624px]">
              <div className="w-[262px]  p-4 border border-[#E8E8EA] rounded-xl flex flex-col gap-[10px]">
                <h1 className="text-2xl font-semibold">Address</h1>
                <p className="text-[#696A75] text-lg font-normal">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
              </div>
              <div className="w-[262px]  p-4 border border-[#E8E8EA] rounded-xl flex flex-col gap-[10px]">
                <h1 className="text-2xl font-semibold">Contact</h1>
                <p className="text-[#696A75] text-lg font-normal">
                  313-332-8662 info@email.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F6F7] h-[480px] w-[624px] py-8 px-10 flex flex-col gap-6">
            <h1 className="font-semibold text-lg">Leave a Message</h1>
            <div className=" flex flex-col gap-6">
              <div className="flex gap-8">
                <input
                  type="text"
                  placeholder="Yourname"
                  className="rounded-[5px] border-[#DCDDDF] w-1/2 border bg-white pl-5 py-2 text-base"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="rounded-[5px] border-[#DCDDDF] w-1/2 border bg-white pl-5 py-2 text-base"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="rounded-[5px] border-[#DCDDDF] w-full border bg-white pl-5 py-2 text-base"
              />
              <textarea
                type="text"
                placeholder="Write a message"
                className="rounded-[5px] border-[#DCDDDF] w-full inline-block align-text-top h-[150px] border bg-white pl-5 py-2 text-base "
              />
            </div>
            <div>
              <button className="py-[10px] px-4 rounded-md bg-[#4B6BFB] text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
