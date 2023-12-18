import { Element, animateScroll as scroll } from "react-scroll";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../About";
import WhatWeDo from "../WhatWeDo";
import Contact from "../Contact";
import Footer from "../../components/Footer";
import { FaArrowUp } from "react-icons/fa6";

const Home = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Element name="home">
        <div className="xl:hidden">
          mobile view not ready tab view not ready
        </div>
        <div className="mx-auto relative hidden xl:block">
          <div className="container mx-auto">
            <Header />
            <button className="fixed z-10 right-12 bottom-12" onClick={scrollToTop}>
              <FaArrowUp className="h-12 w-12" />
            </button>
          </div>
          <Hero />

          <div className="container mx-auto">
          <Element name="about">
            <About />
          </Element>

          <Element name="whatwedo">
            <WhatWeDo />
          </Element>

          <Element name="contact">
            <Contact />
          </Element>
          </div>
          <Footer />
        </div>
      </Element>
    </>
  );
};

export default Home;
