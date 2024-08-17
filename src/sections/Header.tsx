import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex items-center justify-center bg-black py-3 text-sm text-white gap-3">
        <p className=" text-white/60 hidden md:block">Streamline your workflow and boot your productivity.</p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="inline-flex h-4 w-4 items-center justify-center" />
        </div>
      </div>

      <div className="py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden items-center gap-6 text-black/60 md:flex">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
