"use client";

import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{ duration: 15, repeat:Infinity, ease:"linear", repeatType:"loop" }}
          >
            <Image src={AcmeLogo} alt="Acme Logo" className="h-8 w-auto" />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="h-8 w-auto"
            />
            <Image src={EchoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="h-8 w-auto"
            />
            <Image src={PulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
            <Image src={ApexLogo} alt="Apex Logo" className="h-8 w-auto" />

            {/* Secont set  */}
            <Image src={AcmeLogo} alt="Acme Logo" className="h-8 w-auto" />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="h-8 w-auto"
            />
            <Image src={EchoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="h-8 w-auto"
            />
            <Image src={PulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
            <Image src={ApexLogo} alt="Apex Logo" className="h-8 w-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
