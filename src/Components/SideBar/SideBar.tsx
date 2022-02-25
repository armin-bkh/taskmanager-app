import { Aside, NavItem } from "../styled-components/Aside.style";
import { IoHome } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", icon: <IoHome />, color: "#f08206" },
  { to: "/add-task", icon: <AiOutlinePlus />, color: "#61af88" },
  {
    href: "https://www.github.com/armin-bkh",
    icon: <FaGithub />,
    color: "#181818",
  },
  {
    href: "https://www.linkedin.com/in/arminbkh",
    icon: <FaLinkedinIn />,
    color: "#3979f0",
  },
  {
    href: "https://www.instagram.com/rminbkh/",
    icon: <FaInstagram />,
    color: "#ee4477",
  },
];

const SideBar = () => {
  return (
    <Aside>
      <nav className="navBar">
        <ul className="nav">
          {links.map((link) => (
            <NavItem key={link.to || link.href} color={link.color}>
              {link.to ? (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    "link " + (isActive ? "active" : "notActive")
                  }
                >
                  {link.icon}
                </NavLink>
              ) : (
                <a
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                  className="link notActive"
                >
                  {link.icon}
                </a>
              )}
            </NavItem>
          ))}
        </ul>
      </nav>
    </Aside>
  );
};

export default SideBar;
