import Navbar from "@components/Navbar";
// import Sidebar from "@components/Sidebar";
import { Outlet } from "react-router-dom";

import { SearchProvider } from "@contexts/SearchContext";

const CustomLayout = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <SearchProvider>
        <Navbar />
        <Outlet />
      </SearchProvider>
    </>
  );
};

export default CustomLayout;
