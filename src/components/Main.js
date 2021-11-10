import Pizza from "../images/Main-pizza.png";

const Main = () => {
  return (
    <div className="main-section">
      <div className="left-side">
        <img src={Pizza} alt="Pizza" />
      </div>
      <div className="right-side">
        <h1>
          Contact Us For <br /> Best Breakfast
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur ad-
          <br /> ipiscing elit, sed do eiusmod tempor incidi-
          <br /> dunt ut labore et dolore magna.
        </p>
        <a className="Contact-btn" href="#">
          Contact Us
        </a>
      </div>
    </div>
  );
};
export default Main;
