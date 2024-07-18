import AddToCartButton from '@ui/AddToCartButton';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ brand, product, productImage, price, productStars }) => {
  // Función para generar las estrellas según el valor recibido
  const renderStars = () => {
    const stars = [];
    const starCount = Math.floor(productStars); // Redondea hacia abajo para obtener la cantidad entera de estrellas

    // Agrega las estrellas completas
    for (let i = 0; i < starCount; i++) {
      stars.push(<FaStar key={i} className='w-5 h-5 text-yellow-500' />);
    }

    // Si hay un decimal mayor o igual a 0.5, agrega media estrella
    if (productStars % 1 !== 0 && productStars % 1 >= 0.5) {
      stars.push(<FaStar key='half' className='w-5 h-5 text-yellow-500' />);
    }

    // Rellena con estrellas vacías si es necesario
    while (stars.length < 5) {
      stars.push(<FaStar key={stars.length} className='w-5 h-5 text-gray-300' />);
    }

    return stars;
  };

  return (
    <div className='relative bg-white p-5 w-[20rem] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-200'>
        <div className="relative w-full h-[12rem] overflow-hidden mb-5">
          <img src={productImage} alt="" className="w-full h-full object-contain" />
        </div>
        <div className='relative'>
          <h5 className="text-gray-600 text-sm">{brand}</h5>
          <h2 className="text-xl font-bold">{product}</h2>
          <div className='flex items-center mt-2'>
              {renderStars()}
          </div>
          <div className='flex justify-between items-center mt-4'>
              <h3 className="text-xl font-semibold text-gray-800">{price}</h3>
              <AddToCartButton />
          </div>
        </div>
    </div>
  );
};

export default ProductCard;
