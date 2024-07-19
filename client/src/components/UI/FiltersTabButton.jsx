import { Button } from "antd";

const FiltersTabButton = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};

export default FiltersTabButton;
