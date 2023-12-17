import { Link } from 'react-scroll';
import paddingLogo from "../../assets/images/padding-logo.png";

const Header = () => {
  return (
    <header>
      <div className="xl:pt-20 xl:pb-8 xl:flex xl:justify-between">
        <div>
          <img src={paddingLogo} alt="padding" />
        </div>

        <nav className="flex">
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
      </div>
    </header>
  );
};

export default Header;
