import Navbar from "@components/Navbar";
// import Sidebar from "@components/Sidebar";
import { Outlet } from "react-router-dom";

const CustomLayout = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default CustomLayout;
