import { useState } from 'react';
import SpecialOffers from "@components/SpecialOffers";
import Section from "@ui/Section";
import FiltersTab from "@ui/FiltersTab";
import Products from '@pages/Products/Products'

const Home = () => {
  const [category, setCategory] = useState('all'); 

  return (
    <div className="w-full max-w-screen-lg mx-auto ">
      <SpecialOffers />
      <Section title='Best Seller'>
        <FiltersTab onCategoryChange={setCategory} />
        <Products category={category} />
      </Section>
    </div>
  );
};

export default Home;
