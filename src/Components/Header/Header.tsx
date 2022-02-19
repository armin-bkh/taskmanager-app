import { Head } from "./Head.style";
import Me from "../../Assets/Images/me.jpeg";

const Header = () => {
  return (
    <Head>
      <div className="me">
        <img src={Me} alt="Me" />
        armin bakhshi
      </div>
      <span className="logo">Task Manager</span>
    </Head>
  );
};

export default Header;
