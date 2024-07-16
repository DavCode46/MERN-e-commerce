import { Link } from "react-router-dom";
import CustomDropdown from "@ui/CustomDropdown";
import { Avatar, Button, Dropdown, Input } from "antd";
import { IoBagOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

const { Search } = Input;

const items = [
  {
    key: "1",
    label: (
      <div>
        Product 1{" "}
        <Button shape="circle" icon={<IoIosRemoveCircleOutline />}></Button>1
        <Button shape="circle" icon={<CiCirclePlus />}></Button>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div>
        Product 2{" "}
        <Button shape="circle" icon={<IoIosRemoveCircleOutline />}></Button>1
        <Button shape="circle" icon={<CiCirclePlus />}></Button>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div>
        Product 3{" "}
        <Button shape="circle" icon={<IoIosRemoveCircleOutline />}></Button>1
        <Button shape="circle" icon={<CiCirclePlus />}></Button>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div>
        Product 4{" "}
        <Button shape="circle" icon={<IoIosRemoveCircleOutline />}></Button>1
        <Button shape="circle" icon={<CiCirclePlus />}></Button>
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <Link to="/cart">
        <Button className="block m-auto">Pagar pedido</Button>
      </Link>
    ),
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8 bg-primary-bg font-poppins text-sm text-black px-10">
        <li className="hover:underline hover:scale-105 transition-all duration-300">
          <Link to="/home">Inicio</Link>
        </li>
        <li>
          <CustomDropdown />
        </li>
        <li className="hover:underline hover:scale-105 transition-all duration-300">
          <Link to="/products/newItems">Novedades</Link>
        </li>
        <li className="hover:underline hover:scale-105 transition-all duration-300">
          <Link to="/discover">Descubre</Link>
        </li>
        <li>
          <Search placeholder="Buscar Productos" />
        </li>
        <li>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
          >
            <Button icon={<IoBagOutline />} />
          </Dropdown>
        </li>
        <li>
          <Link to="/profile">
            <Avatar />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
