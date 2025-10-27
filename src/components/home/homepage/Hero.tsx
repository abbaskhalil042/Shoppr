import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden py-16">
      {/* Top SVG */}
      <div className="absolute top-0 left-0 w-full -z-10 opacity-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-40 md:h-56 lg:h-72"
        >
          <path
            fill="#e8a87c"
            fillOpacity="0.88"
            d="M0,224L11.4,218.7C22.9,213,46,203,69,213.3C91.4,224,114,256,137,250.7C160,245,183,203,206,181.3C228.6,160,251,160,274,138.7C297.1,117,320,75,343,85.3C365.7,96,389,160,411,160C434.3,160,457,96,480,69.3C502.9,43,526,53,549,90.7C571.4,128,594,192,617,186.7C640,181,663,107,686,101.3C708.6,96,731,160,754,160C777.1,160,800,96,823,69.3C845.7,43,869,53,891,74.7C914.3,96,937,128,960,160C982.9,192,1006,224,1029,208C1051.4,192,1074,128,1097,90.7C1120,53,1143,43,1166,42.7C1188.6,43,1211,53,1234,90.7C1257.1,128,1280,192,1303,218.7C1325.7,245,1349,235,1371,240C1394.3,245,1417,267,1429,277.3L1440,288L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 lg:px-20 xl:px-28">
        {/* Heading Section */}
        <div className="flex flex-col gap-16 w-full md:w-[50%] text-center md:text-left">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 leading-tight">
              From Our Oven
              <br />
              to Your Heart
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
              Time-honored recipes, modern twists, and a promise of joy in every
              bite.
            </p>
          </div>

          <div className="flex items-center gap-5 justify-center md:justify-start">
            <Button className="group bg-secondary-bg rounded-full px-4 py-4 cursor text-text cursor-pointer hover:text-white">
              Order Now{" "}
              <ArrowRight className="group-hover:translate-x-0.5 transition-all duration-300" />
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full px-4 py-4 cursor text-text cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image w-full md:w-[45%] flex justify-center md:justify-end">
          <Image
            src="/assets/homepage/bakery-removebg-preview.png"
            width={500}
            height={500}
            loading="lazy"
            alt="bakery shop"
            className="w-full max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] object-contain"
          />
        </div>
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full -z-10 opacity-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-40 md:h-56 lg:h-72"
        >
          <path
            fill="#e8a87c"
            fillOpacity="0.88"
            d="M0,192L11.4,160C22.9,128,46,64,69,37.3C91.4,11,114,21,137,64C160,107,183,181,206,208C228.6,235,251,213,274,208C297.1,203,320,213,343,224C365.7,235,389,245,411,234.7C434.3,224,457,192,480,165.3C502.9,139,526,117,549,112C571.4,107,594,117,617,138.7C640,160,663,192,686,218.7C708.6,245,731,267,754,272C777.1,277,800,267,823,261.3C845.7,256,869,256,891,256C914.3,256,937,256,960,234.7C982.9,213,1006,171,1029,154.7C1051.4,139,1074,149,1097,165.3C1120,181,1143,203,1166,224C1188.6,245,1211,267,1234,229.3C1257.1,192,1280,96,1303,74.7C1325.7,53,1349,107,1371,122.7C1394.3,139,1417,117,1429,106.7L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
