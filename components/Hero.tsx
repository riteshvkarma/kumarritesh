import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const Hero = () => {
  return (
    <section className="h-full hero">
      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className="text-center lg:text-left">
            <h1 className="h1 hero-title uppercase font-bold">
              Frontend
              <br />
              <span className="outlined">Developer</span>
              <br />
            </h1>
            <div className="exp uppercase text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              <Cover>10+ Years Experience</Cover>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                className="flex items-center gap-2 uppercase text-white hover:text-white rounded-full"
                variant="outline"
                size="lg"
              >
                <span>Download cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all "
                />
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </section>
  );
};

export default Hero;
