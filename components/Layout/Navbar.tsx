import {useState} from "react"
import Link from "next/link";
import {motion, AnimatePresence} from 'framer-motion'
import { useRouter } from "next/router";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {

  const url = "http://localhost:3000/"

  const [open, setOpen] = useState(false)

  const router = useRouter()

  const navLinks = [
    {
      title: "Home",
      href: "/",
      active: router.asPath === "/#",
    },

    {
      title: "About Us",
      href: "#about",
      active: router.asPath === "#about",
    },
    {
      title: "Adoption",
      href: "#promise",
      active: router.asPath === "#promise",
    },
    {
      title: "Contact",
      href: "#contact",
      active: router.asPath === "#contact",
    },
  ];


  return (
    <header className="py-2 font-serif sticky backdrop-blur inset-0 z-30">
      {/**Desktop Navigation Starts**/}
      <nav className="hidden md:flex max-w-7xl mx-auto px-4 justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={500}
            height={250}
            alt="logo"
            className="w-44 lg:w-60 object-cover"
          />
        </Link>

        <div className="flex items-center">
          <ul className="flex items-center  h-full">
            {navLinks.map((item) => (
              <motion.li
                layout
                key={item.title}
                className={`h-full transition-all duration-500 py-4 px-2 cursor-pointer ${
                  item.active ? "" : ""
                }`}
              >
                <Link href={item.href}>
                  <motion.a
                    layout
                    transition={{ duration: 0.3 }}
                    className={`uppercase font-bold font-serif active:text-brand-main  transition-all duration-500 ${
                      item.active ? "text-brand-main" : "text-brand-main"
                    }`}
                  >
                    {item.title}
                  </motion.a>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/**Desktop Navigation Ends**/}
      <nav className="container flex md:hidden px-4 items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={566.9}
            height={289.9}
            alt="logo"
            className="w-32 object-cover"
          />
        </Link>

        <HiMenu
          onClick={() => setOpen(true)}
          className="h-12 w-12 text-gray-600"
        />
        <AnimatePresence exitBeforeEnter initial={false}>
          {open && (
            <motion.div
              className="w-full z-30 h-screen items-center list-none bg-slate-700 p-8 flex flex-col justify-around absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
            >
              {navLinks.map((item) => (
                <motion.li
                  layout
                  key={item.title}
                  className={`h-full transition-all duration-500 py-4 px-2 cursor-pointer ${
                    item.active ? "" : ""
                  }`}
                >
                  <Link href={item.href}>
                    <motion.a
                      layout
                      transition={{ duration: 0.3 }}
                      className={`uppercase font-medium transition-all duration-500 ${
                        item.active ? "text-gray-50" : "text-gray-100"
                      }`}
                    >
                      {item.title}
                    </motion.a>
                  </Link>
                </motion.li>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/**Mobile Navigation Starts**/}

      {/**Mobile Navigation Ends**/}
    </header>
  );
};
export default Navbar;