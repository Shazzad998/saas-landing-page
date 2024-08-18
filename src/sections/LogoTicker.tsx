import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className=" py-8 md:py-12 bg-white">
      <div className="container">
        <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex flex-none gap-14">
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
          </div>
        </div>
      </div>
    </section>
  );
};
