const OffersButton = ({ children }) => {
  return (
    <button className="mt-4 px-4 py-2 border-none font-montserrat text-[.7rem] bg-primary-button hover:bg-primary-buttonHover text-white rounded-md transition-all duration-300 cursor-pointer">
      {children}
    </button>
  );
};

export default OffersButton;
