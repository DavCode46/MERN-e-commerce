import Container from "@components/UI/Container";

const SpecialOffers = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-[3rem]">
      <h2 className="text-2xl font-bold mb-8">Special Offers</h2>
      <div className="flex  items-start gap-5">
        <Container
          title="High Quality Furniture"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc libero, vulputate et finibus a, venenatis quis mi."
          bgImage="/room1.jpg"
          textButton="Shop Now"
          className="w-full md:w-1/2 rounded-lg"
        />
        <Container
          title="Discount Up to"
          discount="70%"
          content="Lorem ipsum dolor sit amet."
          bgImage="/room2.jpg"
          textButton="Shop Now"
          className="w-full md:w-1/3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
