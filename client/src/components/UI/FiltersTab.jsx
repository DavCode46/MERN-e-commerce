import FiltersTabButton from "@components/UI/FiltersTabButton";

const FiltersTab = ({ onCategoryChange }) => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <FiltersTabButton onClick={() => onCategoryChange('all')}>
            All Products
          </FiltersTabButton>
        </li>
        <li>
          <FiltersTabButton onClick={() => onCategoryChange('chairs')}>
            Chairs
          </FiltersTabButton>
        </li>
        <li>
          <FiltersTabButton onClick={() => onCategoryChange('tables')}>
            Tables
          </FiltersTabButton>
        </li>
        <li>
          <FiltersTabButton onClick={() => onCategoryChange('sofas')}>
            Sofas
          </FiltersTabButton>
        </li>
        <li>
          <FiltersTabButton onClick={() => onCategoryChange('lamps')}>
            Lamps
          </FiltersTabButton>
        </li>
        <li>
          <FiltersTabButton onClick={() => onCategoryChange('shelfs')}>
            Estanterías
          </FiltersTabButton>
        </li>
      </ul>
    </nav>
  );
};

export default FiltersTab;
