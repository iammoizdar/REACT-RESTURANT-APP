import Img from "../images/aboutimage.png";

const About = () => {
  return (
    <div className="container">
    <div className="aboutsection">
      <div className="leftcontent-img">
        <img src={Img} alt="FoodImage" />
      </div>
      <div className="about-us">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, con- <br /> sectetur adipiscing el- <br />{" "}
          it, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna
          aliqua. <br /> Quis ipsum suspendisse ultrices <br /> gravida. Risus
          commodo viverra <br /> maecenas accumsan lacus <br /> vel facilisis.{" "}
        </p>
      </div>
    </div>

    </div>
  );
};

export default About;
