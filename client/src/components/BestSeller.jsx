import FiltersTab from '@ui/FiltersTab'
import Products from '@pages/Products/Products'

const BestSeller = () => {
  return (
    <div className='flex flex-col m-auto'>
        <h2 className="text-2xl font-bold mb-8 mt-5">Best Seller</h2>
        <FiltersTab />
        <Products />
    </div>
  )
}

export default BestSeller