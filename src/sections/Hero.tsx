import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import CylinderImage from "@/assets/cylinder.png";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] pb-20 pt-8 md:pb-10 md:pt-5">
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <div className="inline-flex rounded-lg border border-black/25 px-3 py-1 text-sm tracking-tight">
              {" "}
              Version 2.0 is here
            </div>
            <h1 className="mt-6 bg-gradient-to-b from-black to-blue-900 bg-clip-text text-5xl md:text-7xl font-bold tracking-tighter text-transparent">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-blue-900">
              Celebrate the joy of accomplishment with an app designerd to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>

            <div className="mt-7 flex items-center gap-1">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <Image
              src={CogImage}
              alt="Cog Image"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
