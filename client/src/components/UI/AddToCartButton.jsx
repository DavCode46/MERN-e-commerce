import { IoBagOutline  } from "react-icons/io5";

const AddToCartButton = () => {
  return (
    <button className="border-none bg-transparent hover:bg-primary-addToCartHover hover:text-white rouded-full p-[.5rem] text-lg rounded-full w-2[rem] h-[2rem] flex items-center justify-center cursor-pointer transition-all duration-200"><IoBagOutline  /></button>
  )
}

export default AddToCartButton