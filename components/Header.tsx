import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 absolute left-0 right-0 top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/kumarritesh-white.svg"
            alt="kumarritesh"
            quality={100}
            width={100}
            height={40}
          />
          <h1 className="ritesh">
            Ritesh Kumar <br />
            <span>Software Engineer</span>
          </h1>
        </Link>

        {/* desktop Nav && Hire me button */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
