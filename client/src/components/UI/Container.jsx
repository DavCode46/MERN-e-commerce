import OffersButton from "@components/UI/OffersButton";

const Container = ({ title, content, discount, bgImage, textButton, className }) => {
    return (
      <div className={`relative rounded-xl overflow-hidden ${className}`}>
        <div
          className="absolute inset-0 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Overlay para mejorar la legibilidad del texto */}
          <div className="absolute inset-0 bg-black opacity-65"></div>
        </div>
        <div className={'relative z-10 p-8 text-white h-[15rem] w-full md:w-2/3'}>
          <h1 className="text-2xl font-montserrat">{title}</h1>
          <h2 className="text-4xl">{discount}</h2>
          <p className="mt-4 text-sm">{content}</p>
          <OffersButton> {textButton} </OffersButton>
        </div>
      </div>
    );
  };
  
  export default Container;
  