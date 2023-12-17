import { Element } from "react-scroll";
import whatwedo from "../../assets/images/whatwedo.png";

const WhatWeDo = () => {
  const Services = [
    {
      index: 1,
      title: "Software Development",
      content:
        "Our expert team transforms concepts into robust, scalable solutions. From coding to deployment, we ensure your software stands out for its efficiency and innovation.",
    },
    {
      index: 2,
      title: "UI/UX Design",
      content:
        "We go beyond aesthetics, creating interfaces that captivate and functionalities that resonate. From wireframes to pixel-perfect designs, we bring your vision to life, ensuring a user journey that's both delightful and intuitive.",
    },
    {
      index: 3,
      title: "Brand Identity & Design",
      content:
        "We specialize in crafting unique visual identities that resonate with your audience. From logos to brand guidelines, we create a cohesive and memorable brand presence that sets you apart.",
    },
    {
      index: 2,
      title: "Digital Marketing",
      content:
        "We navigate the digital landscape strategically, crafting compelling campaigns that drive engagement and boost visibility. From SEO to social media, our tailored solutions ensure your brand stands out in the digital realm.",
    },
  ];

  return (
    <>
      <Element name="whatwedo">
        <section>
          <div className="flex justify-between gap-6 xl:py-12">
            <div className="flex items-center xl:w-[564px]">
              <img src={whatwedo} alt="whatwedo" className="w-full" />
            </div>

            <div className="xl:w-[564px]">
              <div>
                <h1 className="w-fit relative">
                  What We Do
                  <span className="absolute line left-0 top-[75px]"></span>
                </h1>
                <p className="py-7 text-zinc-700 text-lg font-medium font-['Manrope']">
                  We provide digital solutions that aid with brand growth,
                  flexible designs that portray brand value and support systems
                  that influence growth and relevance.
                </p>
              </div>
              <div>
                <h3 className="text-teal-400 xl:text-3xl xl:font-semibold">
                  Our Services:
                </h3>
                <ul className="pt-4 flex flex-col justify-between gap-4 list-none">
                  {Services.map((service) => (
                    <li
                      key={service.index}
                      className="relative before:content-[''] before:block before:absolute before:w-[0.2rem] before:h-28 before:bg-teal-600 before:left-[-7px] before:top-3.5 xl:pl-3"
                    >
                      <span className="absolute left-[-12.5px] top-[10px] w-3 h-3 bg-teal-600 rounded-full"></span>
                      <h5 className="text-zinc-700 font-bold xl:text-xl">
                        {service.title}
                      </h5>
                      <p className="text-neutral-500 text-base font-['Monrope']">
                        {service.content}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default WhatWeDo;
