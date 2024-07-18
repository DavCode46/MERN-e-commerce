import SpecialOffers from '@components/SpecialOffers'
import BestSeller from '@components/BestSeller'

const Home = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto '>
     <SpecialOffers />
     <BestSeller />
    </div>
  );
};

export default Home;
