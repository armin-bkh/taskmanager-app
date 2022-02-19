import { Aside, NavItem } from "./Aside.style";
import { IoHome } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", icon: <IoHome />, color: "#f43f5e" },
  { to: "/add-task", icon: <AiOutlinePlus />, color: "#10b981" },
];

const SideBar = () => {
  return (
    <Aside>
      <nav className="navBar">
        <ul className="nav">
          {links.map((link) => (
            <NavItem key={link.to} color={link.color}>
              <NavLink to={link.to}>{link.icon}</NavLink>
            </NavItem>
          ))}
        </ul>
      </nav>
    </Aside>
  );
};

export default SideBar;
