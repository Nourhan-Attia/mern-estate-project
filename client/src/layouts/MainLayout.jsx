import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
