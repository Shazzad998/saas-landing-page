import ProductImgae from "@/assets/product-image.png";
import PyraminImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-200 py-24 overflow-x-clip">
      <div className="container">
        <div className="mx-auto max-w-xl">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border border-black/25 px-3 py-1 text-sm tracking-tight">
              Boost your productivity
            </div>
          </div>
          <h2 className="mt-5 bg-gradient-to-b from-black to-blue-900 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent md:text-5xl md:leading-10">
            A more effective way to track progress
          </h2>
          <p className="mt-5 text-center text-lg font-medium leading-7 tracking-tight text-blue-950">
            Effortlessly turn your ideas into a fully functional, responsive,
            Saas website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImgae} alt="Product Image" className="mt-10" />
          <Image
            src={PyraminImage}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
          />
          <Image
            src={TubeImage}
            alt="Tube Image"
            height={248}
            className="absolute -left-36 bottom-24 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
