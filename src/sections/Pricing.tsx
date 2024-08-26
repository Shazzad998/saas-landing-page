'use client'
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import {motion} from 'framer-motion'

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="mx-auto max-w-xl">
          <h2 className="bg-gradient-to-b from-black to-blue-900 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent md:text-5xl md:leading-10">
            Pricing
          </h2>
          <p className="mt-5 text-center text-lg font-medium leading-7 tracking-tight text-blue-950">
            Free forever, Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:items-end md:justify-center lg:flex-nowrap">
          {pricingTiers.map((item, index) => (
            <div key={index}
              className={twMerge(
                "w-full max-w-xs rounded-3xl border border-gray-200 p-10 shadow-md shadow-indigo-100",
                item.inverse === true && "border-black bg-black text-white",
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    item.inverse === true && "text-white/60",
                  )}
                >
                  {item.title}
                </h3>
                {item.popular && (
                  <div className="inline-flex rounded-xl border border-white/20 px-4 py-1.5 text-sm">
                    <motion.span animate={{
                      backgroundPositionX:"100%"
                    }} transition={{
                      duration:2,
                      repeat:Infinity,
                      ease:"linear",
                      repeatType:'loop'
                    }} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] bg-clip-text font-medium text-transparent">
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="mt-7 flex items-baseline gap-1">
                <span className="text-4xl font-bold leading-none tracking-tighter">
                  ${item.monthlyPrice}
                </span>
                <span className="font-bold tracking-tight text-black/50">
                  /month
                </span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary mt-7 w-full",
                  item.inverse === true && "bg-white text-black",
                )}
              >
                {item.buttonText}
              </button>
              <ul className="mt-8 flex flex-col gap-5">
                {item.features.map((feature, index) => (
                  <li className="flex items-center gap-4 text-sm" key={index}>
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
