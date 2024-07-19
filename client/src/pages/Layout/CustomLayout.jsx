import Navbar from "@components/Navbar";
// import Sidebar from "@components/Sidebar";
import { Outlet } from "react-router-dom";

import { SearchProvider } from "@contexts/SearchContext";
import Sidebar from "@components/Sidebar";

const CustomLayout = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <SearchProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col ml-[15rem] w-full">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </SearchProvider>
    </>
  );
};

export default CustomLayout;
