import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import Image from "next/image";
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-100 py-24 overflow-x-clip">
      <div className="container">
        <div className="mx-auto max-w-xl relative">
          <h2 className="mt-3 bg-gradient-to-b from-black to-blue-900 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent md:text-5xl md:leading-10 py-2">
            Sign up for free today
          </h2>
          <p className="mt-3 text-center text-lg font-medium leading-7 tracking-tight text-blue-950">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <Image src={StarImage} alt="Star Image" width={220} height={220} className=" hidden sm:block absolute sm:-left-40 md:-left-60 lg:-left-80 2xl:-left-96 -top-28"/>
          <Image src={SpringImage} alt="Spring Image" width={220} height={220} className=" hidden sm:block absolute sm:-right-40 md:-right-60 lg:-right-80 2xl:-right-96 -bottom-16"/>

          <div className="mt-10 flex justify-center gap-2">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text">
              <span>Learn more</span> <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
