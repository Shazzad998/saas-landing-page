import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center text-sm text-white/70">
      <div className="container">
        <div className="relative inline-flex before:absolute before:bottom-0 before:top-2 before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#C2F0B1,#2FD8FE)] before:blur before:content-['']">
          <Image src={Logo} height={40} alt="SaaS Logo" className="relative" />
        </div>
        <nav className=" flex flex-col sm:flex-row sm:justify-center gap-6 mt-6">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customers</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>

        <div className=" flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className=" mt-6">&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
