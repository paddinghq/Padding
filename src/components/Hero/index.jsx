import business from "../../assets/images/business.png";

const Hero = () => {
  return (
    <section>
      <div className="curved-background rounded-b-[25rem] xl:px-16 xl:pt-16 xl:pb-[116px]">
        <div className="flex justify-between gap-6">
          <div className="w-[564px]">
            <h1>
              Providing <span className="text-teal-700">solutions</span> one
              step at a time
            </h1>
            <p className="text-zinc-700 text-xl leading-loose xl:pt-6 xl:pb-12">
              We are digital innovators, we bridge the gap between problems and
              solutions. We provide solutions one step at a time building
              sustainable technological innovations and guiding your brand
              towards prospective clients.
            </p>
            <button className="bg-neutral-800 text-center text-neutral-50 text-base font-medium font-['Manrope'] p-3 rounded hover:bg-neutral-600 transition-all">
              Contact Us
            </button>
          </div>

          <div className="w-[564px]">
            <img
              src={business}
              alt="business"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
