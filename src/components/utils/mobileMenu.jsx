export const MobileMenu = ({ handleMenu, isOpenMenu }) => {
  return (
    <div
      className={`overflow-x-hidden absolute transition-all duration-500  ease-in-out ${
        isOpenMenu ? "right-0" : "right-[-100%]"
      } top-0 w-full bg-gray-300 dark:bg-white flex justify-end Z-10`}
    >
      <div className=" w-[320px] h-screen flex flex-col bg-white dark:bg-[#030712]">
        <div className="flex justify-between p-4 border-b-[#F3F4F6] dark:border-b-[#1F2937] border-b-[1px]">
          <div className="text-[#111827] dark:text-[#F9FAFB] font-normal text-center text-[30px] ">
            TOM
          </div>
          <div className="">
            <button onClick={handleMenu}>
              <MobileExitIcon />
            </button>
          </div>
        </div>

        <div className=" flex flex-col gap-4 p-4 border-b-[#F3F4F6] dark:border-b-[#1F2937] border-b-[1px] ">
          <div className=" text-base font-medium  text-gray-600 dark:text-[#D1D5DB]">
            <a href="#about" onClick={handleMenu}>
              About
            </a>
          </div>
          <div className=" text-base font-medium  text-gray-600 dark:text-[#D1D5DB]">
            <a href="#experience" onClick={handleMenu}>
              Experience
            </a>
          </div>
          <div className=" text-base font-medium  text-gray-600 dark:text-[#D1D5DB]">
            <a href="#work" onClick={handleMenu}>
              Work
            </a>
          </div>
          <div className=" text-base font-medium  text-gray-600 dark:text-[#D1D5DB]">
            <a href="#contact" onClick={handleMenu}>
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-4">
          <div className="flex justify-between">
            <div className="text-base font-normal  text-gray-600 dark:text-[#D1D5DB]">
              Switch Theme
            </div>
            <ToggleTheme />
          </div>
          <div className="text-base flex justify-center font-medium text-gray-50 dark:text-[#111827] py-1.5 px-4  rounded-2xl bg-gray-900 dark:bg-[#F9FAFB]">
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};
