import { Outlet, Link } from "react-router-dom";
import '../Styles/Header.css'
export const Header = () => {
  return (
    <>
    <div className="header-container">
      <h1 className="title">FILIPINO<br />RECIPES</h1>
      <div>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/recipes">RECIPES</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>
      </div>
    </div>
    <Outlet />
    </>
  )
}
