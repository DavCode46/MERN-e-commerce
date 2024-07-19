import Container from "@ui/Container";
import { SPECIALS_DATA } from "@data/data";
import Section from "./UI/Section";

const SpecialOffers = () => {
  return (
    <div className="mt-[3rem]">
      <Section title='Special Offers'>

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
      </Section>
    </div>
  );
};

export default SpecialOffers;
