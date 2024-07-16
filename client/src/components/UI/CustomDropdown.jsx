import {  Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to="products/sofas">Sofás</Link>,
  },
  {
    key: "2",
    label: <Link to="products/chairs">Sillas</Link>,
  },
  {
    key: "3",
    label: <Link to="products/lamps">Lámparas</Link>,
  },
  {
    key: "4",
    label: <Link to="products/tables">Mesas</Link>,
  },
];
const CustomDropdown = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        arrow
      >
        <Link to='#' className="text-black">Productos</Link>
      </Dropdown>
    </Space>
  </Space>
);
export default CustomDropdown;
