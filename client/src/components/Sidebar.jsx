import { MdFilterList } from "react-icons/md";

import { PRODUCTS } from "@data/data";
import FiltersContainer from "./UI/FiltersContainer";

import CustomSlider from "@ui/CustomSlider";

const Sidebar = () => {
  const onChange = () => {
    console.log("onChange");
  };

  return (
    <div className="w-[15rem] fixed top-0 bottom-0 left-0 bg-primary-sidebar">
      <div className="h-[5rem] p-5 bg-primary-sidebarHeader flex items-center">
        <h1 className="text-white text-lg font-bold">Interiorism</h1>
      </div>
      <div className="flex items-center justify-between py-5 px-2 text-primary-textWhite mx-3">
        <div className="flex items-center gap-3">
          <MdFilterList />
          <h2 className="text-[1rem]">Filters</h2>
        </div>
        <button className="text-[.7rem] bg-transparent border-none text-primary-textSidebar underline cursor-pointer hover:text-primary-textWhite transition-all duration-200">
          Reset Filter
        </button>
      </div>

      <div>
        <FiltersContainer products={PRODUCTS} store title="Store" />
      </div>
      <div>
        <FiltersContainer products={PRODUCTS} title="Products" />
      </div>
      <div className="ml-3 mr-3">
        <CustomSlider minimum={`${1}€`} maximum={`${1000}€`}/>
      </div>
    </div>
  );
};

export default Sidebar;
