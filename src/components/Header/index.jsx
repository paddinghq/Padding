import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import paddingLogo from "../../assets/images/padding-logo.png";
import paddingWhite from "../../assets/images/padding-white-short.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const hancleToggle = () => setToggle(!toggle);

  return (
    <header>
      <div className="flex justify-between items-center py-10 px-5 xl:pt-20 xl:pb-8">
        <div className="w-28">
          <img src={paddingLogo} alt="padding" />
        </div>

        <div
          className={`w-full h-full pt-12 px-4 bg-teal-900 top-0 block transition lg-hidden ${
            toggle
              ? "opacity-100 visible absolute z-10 right-0 transition duration-400"
              : "opacity-0 invisible absolute z-0 right-[100%] transition duration-400"
          }`}
        >
          <div className="flex justify-between">
            <div className="w-8">
              <img src={paddingWhite} alt="padding-icon" className="w-full" />
            </div>
          </div>

          <div className="">
            <nav className="mt-8">
              <ul className="divide-y space-y-4">
                <li className="pt-4 text-white cursor-pointer text-xl hover:text-teal-200 transition-all">
                  <Link to="about" smooth={true} duration={500}>
                    About Us
                  </Link>
                </li>
                <li className="pt-4 text-white cursor-pointer text-xl hover:text-teal-200 transition-all">
                  <Link to="whatwedo" smooth={true} duration={500}>
                    What We Do
                  </Link>
                </li>
                <li className="pt-4 text-white cursor-pointer text-xl hover:text-teal-200 transition-all">
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="fixed bottom-8">
              <p className="text-white">&copy; Padding technologies 2023</p>
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex justify-between items-center gap-12">
            <li className="text-zinc-700 cursor-pointer text-xl hover:text-teal-600 transition-all">
              <Link to="about" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li className="text-zinc-700 cursor-pointer text-xl hover:text-teal-600 transition-all">
              <Link to="whatwedo" smooth={true} duration={500}>
                What We Do
              </Link>
            </li>
            <li className="text-zinc-700 cursor-pointer text-xl hover:text-teal-600 transition-all">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <button
            className="block opacity-100 visible absolute top-[2.75rem] z-10 transition-opacity duration-400"
            onClick={hancleToggle}
          >
            {toggle ? (
              <AiOutlineClose className="text-white " />
            ) : (
              <AiOutlineMenu />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
