import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header-nav">
      <div className="logo">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Posts
        </NavLink>
        <NavLink
          to="/comments"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Comments
        </NavLink>
        <NavLink
          to="/albums"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Albums
        </NavLink>
        <NavLink
          to="/photos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Photos
        </NavLink>
        <NavLink
          to="/todos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Todos
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Users
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
