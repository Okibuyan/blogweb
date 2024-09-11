import Link from "next/link";

import { FacebookIcon } from "@/components/svg/FacebookIcon";
import { FooterLogo } from "@/components/svg/FooterLogo";
import { InstagramIcon } from "@/components/svg/InstagramIcon";
import { LinkedInIcon } from "@/components/svg/LinkedInIcon";
import { MetaBlogText } from "@/components/svg/MetaBlogText";
import { TwitterIcon } from "@/components/svg/TwitterIcon";
import { CopyRight } from "@/components/svg/CopyRight";

export const Footer = () => {
  return (
    <div className="h-[487px] bg-[#F6F6F7] w-screen flex flex-col gap-6 py-16 items-center">
      <div className="flex container justify-between">
        <div className="w-[280px] flex flex-col gap-3">
          <h1 className="text-[#181A2A] text-lg font-semibold">About</h1>
          <p className="text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-[#181A2A] text-base font-normal">
              <strong>Email :</strong> info@jstemplate.net
            </p>
            <p className="text-[#181A2A]">
              {" "}
              <strong>Phone :</strong> 880 123 456 789
            </p>
          </div>
        </div>
        <div className="text-[#3B3C4A] flex flex-col gap-2">
          <Link href="/">Home</Link>
          <Link href="blogs">Blog</Link>
          <Link href="contact-us">Contact</Link>
        </div>
        <div className="flex gap-[25px]">
          <a href="">
            <FacebookIcon />
          </a>
          <a href="">
            <TwitterIcon />
          </a>
          <a href="">
            <InstagramIcon />
          </a>
          <a href="">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="h-[95px] border-t border-[#DCDDDF] container flex justify-between items-center">
        <div className="flex gap-[10px] items-center">
          <FooterLogo />
          <div className="flex flex-col gap-[2px]">
            <MetaBlogText />
            <CopyRight />
          </div>
        </div>
        <div className="text-[#3B3C4A] flex gap-4">
          <a href="">Terms of Use</a>
          <div className="bg-[#E8E8EA] w-[1px] h-6"></div>
          <a href="">Privacy Policy</a>
          <div className="bg-[#E8E8EA] w-[1px] h-6"></div>
          <a href="">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};
