import PropTypes from "prop-types";

const AboutComp = (props) => {
  // const { img, title, content, alt } = props;

  return (
    <div className="bg-neutral-50 shadow-2xl flex-col justify-start items-start inline-flex xl:pt-10 xl:px-6 xl:pb-28">
      <img src={props.img} alt={props.alt} />
      <h3 className="py-4 text-teal-500 font-semibold xl:text-4xl">
        {props.title}
      </h3>
      <p className="w-80 text-zinc-700 text-base">{props.content}</p>
    </div>
  );
};

AboutComp.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default AboutComp;
