import { useEffect, useState } from 'react';
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = 500;

      setIsVisible(scrollHeight > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Element name="home">
        <div className="xl:hidden">
          mobile view not ready tab view not ready
        </div>
        <div className="mx-auto relative hidden xl:block">
          <div className="container mx-auto">
            <Header />
            <button  className={`transition-opacity fixed z-10 right-12 bottom-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
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
