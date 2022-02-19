import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { LayoutContainer } from "./LayoutContainer.style";

interface layoutProps {
  children: React.ReactChild;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <SideBar />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
