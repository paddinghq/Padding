import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="pt-8 mb-20 border-t-2 border-gray-200">
        <div className="container mx-auto flex justify-between">
          <div>
            <p>&copy; Padding technologies 2023</p>
          </div>
          <nav className="flex">
            <ul className="flex justify-between gap-12">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
