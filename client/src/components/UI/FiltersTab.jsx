import FiltersTabButton from "@components/UI/FiltersTabButton"
const FiltersTab = () => {
  return (
    <nav>
        <ul className="flex gap-4">
            <li><FiltersTabButton>All Products</FiltersTabButton></li>
            <li><FiltersTabButton>Chairs</FiltersTabButton></li>
            <li><FiltersTabButton>Tables</FiltersTabButton></li>
            <li><FiltersTabButton>Sofas</FiltersTabButton></li>
            <li><FiltersTabButton>Lamps</FiltersTabButton></li>
        </ul>
    </nav>
  )
}

export default FiltersTab