import AboutComp from "./components/AboutComp";
import vision from "../../assets/images/vision.png";
import mission from "../../assets/images/mission.png";
import setApart from "../../assets/images/set-apart.png";

function About() {
  const AboutItems = [
    {
      index: "2",
      src: mission,
      title: "Mission",
      content:
        "To be the Catalyst of Positive Change in the Global Digital Landscape, Crafting Innovative Solutions that Transcend Boundaries, Foster Sustainability, and Elevate Business Potential.",
    },
    {
      index: "1",
      src: vision,
      title: "Vision",
      content:
        "Empowering a Connected World Through Sustainable Digital Innovation.",
    },
    {
      index: "3",
      src: setApart,
      title: "What set us apart",
      content:
        "The distinctiveness that sets us apart from others lies in our commitment to innovation, unparalleled quality, and a customer-centric approach.",
    },
  ];

  return (
    <>
      <section>
        <div className="my-16 xl:my-24">
          <div className="text-center relative">
            <h1 className="relative pb-4 w-fit mx-auto">
              About Us
              <span className="absolute line left-0 top-10 lg:top-14 xl:top-[75px]"></span>
            </h1>
          </div>

          <div className="pt-6 pb-8 lg:pt-8 lg:pb-10 xl:pt-8 xl:pb-14">
            <p className="text-zinc-700 text-center font-thin text-sm xl:text-lg">
              Padding Technologies Limited is a Nigerian digital innovation
              company founded in 2022. We specialise in software development,
              UI/UX design, brand identity, digital marketing, web
              development, mobile app development, e-commerce development,
              content creation, social media marketing, SEO, and PPC
              advertising. Our commitment to sustainability sets us apart, and
              we believe in building technological innovations that not only
              meet business goals but also contribute positively to the world.
            </p>
          </div>

          <div className="flex justify-between flex-col gap-6 md:justify-center md:items-center lg:items-stretch lg:flex-row lg:flex-wrap">
            {AboutItems.map((item) => (
              <AboutComp
                key={item.index}
                img={item.src}
                alt={item.title}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;