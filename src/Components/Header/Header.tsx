import { Head } from "./Head.style";
import Me from "../../Assets/Images/me.jpeg";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <Head>
      <div className="me">
        <img src={Me} alt="Me" />
        armin bakhshi
      </div>
      <span className="logo">
        <span>Task Manager</span>
        <FaTasks />
      </span>
    </Head>
  );
};

export default Header;
