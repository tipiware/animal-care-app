import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  const tempDate = new Date();

  const year = tempDate.getFullYear()

  return (
    <footer className="bg-orange-400">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={200}
              height={200}
              alt="logo"
              className="w-28 md:w-44 lg:w-52 object-cover"
            />
          </Link>

          <div className="flex flex-col font-serif font-bold">
            <Link legacyBehavior href="#"><a>Home</a></Link>
            <Link legacyBehavior href="#about"><a>About Us</a></Link>
            <Link legacyBehavior href="#promise"><a>Our Mission</a></Link>
          </div>

          <div className="">
            <p className="text-sm md:text-md text-slate-800">{year}&copy;All right reserved</p>
            <p className="text-sm md:text-md text-slate-800">Developed by <Link legacyBehavior href=""><a className="font-bold cursor-pointer">Cheng Jie</a></Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;