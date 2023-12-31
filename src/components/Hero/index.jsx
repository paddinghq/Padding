import { Link } from "react-scroll";
import business from "../../assets/images/business.png";

const Hero = () => {
  return (
    <section>
      <div className="curved-background pt-10 px-4 pb-20 md:pb-24 xl:px-16 xl:pt-16 xl:pb-[116px]">
        <div className="container mx-auto">
          <div className="flex justify-between gap-8 flex-col lg:flex-row-reverse">
            <div className="lg:w-[564px]">
              <img
                src={business}
                alt="business"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:w-[564px]">
              <h1>
                Providing <span className="text-teal-700">solutions</span> one
                step at a time
              </h1>
              <p className="mt-4 text-zinc-700 text-sm lg:leading-loose lg:text-xl xl:pt-6 xl:pb-12">
                We are digital innovators, we bridge the gap between problems
                and solutions. We provide solutions one step at a time building
                sustainable technological innovations and guiding your brand
                towards prospective clients.
              </p>

              <button className="bg-neutral-800 text-center text-neutral-50 text-base mt-14 font-normal font-['Manrope'] p-3 rounded hover:bg-neutral-600 transition-all">
                <Link to="contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
