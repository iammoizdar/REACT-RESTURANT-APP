import logo from "../images/logo.png";
import Nav from "./Nav.js";
const Navbar = () => {
  return (
    <div className="Navbar">
      <Nav link_Active="HOME" link2="ABOUT" link3="MENUS" link4="OFFERS" />
      <div className="Logo">
        <img src={logo} alt="logo" />
      </div>
      <Nav link1="GALLERY" link2="CONTACT" link3="BLOG" />
    </div>
  );
};

export default Navbar;
