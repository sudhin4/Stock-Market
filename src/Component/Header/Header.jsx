import "../Header/Header.css"


function Header() {
  return (
    <>
      <div className="Header_div">
        <div className="Logo_name">
          <h1 className="LogoHeading">Market View</h1>
        </div>
        <div className="Paging_section_header">
          <li className="pageslink _about">About</li>
          <li className="pageslink _contaact">Contact</li>
          <button className="signup_btn">Signup</button>
        </div>
      </div>
    </>
  );
}
export default Header;
