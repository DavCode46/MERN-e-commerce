import Container from "@ui/Container";
import { SPECIALS_DATA } from "@data/data";

const SpecialOffers = () => {
  return (
    <div className="mt-[3rem]">
      <h2 className="text-2xl font-bold mb-8">Special Offers</h2>
      <div className="flex  items-start gap-5">
        {SPECIALS_DATA.map((item) => {
          return (
            <Container
              key={item.id}
              title={item.title}
              content={item.content}
              bgImage={item.bgImage}
              textButton={item.textButton}
              className={item.className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpecialOffers;
