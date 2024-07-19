import { Slider } from "antd";

const CustomSlider = ({ minimum, maximum }) => {
  return (
    <div>
      <Slider
        marks={{
          0: {
            style: { color: "#B0B0B0" },
            label: <strong>{minimum}</strong>,
          },
          100: {
            style: { color: "#B0B0B0" },
            label: <strong>{maximum}</strong>,
          },
        }}
        defaultValue={30}
        style={{ width: '90%' }}
        className="text-primary-textSidebar"
        
      />
    </div>
  );
};

export default CustomSlider;
