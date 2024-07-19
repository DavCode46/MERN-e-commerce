import { Checkbox, Divider } from "antd";
import { useMemo } from "react";

const FiltersContainer = ({ products, store, title, onChange }) => {
  // Use a memoized value to store unique categories/brands and their counts
  const uniqueItems = useMemo(() => {
    const countMap = new Map();

    // Count occurrences based on store prop
    products.forEach((product) => {
      const key = store ? product.brand : product.category;
      countMap.set(key, (countMap.get(key) || 0) + 1);
    });

    return Array.from(countMap.entries());
  }, [products, store]);

  return (
    <>
      <div className={`${store ? 'h-[15rem]' : 'h-[10rem]'} overflow-auto custom-scrollbar`}>
        <h5 className="ml-5 mt-3 mb-2 text-primary-textSidebar">{title}</h5>
        {uniqueItems.map(([key, count]) => (
          <div key={key} className="flex items-center ml-5 gap-3">
            <Checkbox className="text-primary-textSidebar" onChange={onChange}>{`${key} (${count})`}</Checkbox>
          </div>
        ))}
      </div>
      <Divider className="bg-primary-textSidebar" />
    </>
  );
};

export default FiltersContainer;
