const Header = () => {
  return (
    <div className="relative">
      <img
        src="background.jpg"
        alt="bg"
        className="h-[413px] w-screen object-cover"
      />
      <div className="absolute top-[30%]  left-[50%] flex flex-col ">
        <span className="text-[42px] text-white font-normal w-[306px]">Good Morning Canvas Valley</span>
      </div>
    </div>
  );
};

export default Header;
