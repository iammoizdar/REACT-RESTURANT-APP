const Nav = ({ link1, link2, link3, link4, link_Active }) => {
  return (
    <nav>
      <a href="#">{link_Active}</a>
      <a href="#">{link1}</a>
      <a href="#">{link2}</a>
      <a href="#">{link3}</a>
      <a href="#">{link4}</a>
    </nav>
  );
};

export default Nav;
