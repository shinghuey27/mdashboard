import "../index.css";

const ToogleSwitch = () => {
  return (
    <div className="flex flex-row">
      <h1 className="text-[16px] font-medium text-white"> Hide balance</h1>
      <div className="absolute ml-[6rem]">
        <label for="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className=" ml-[11px] slider block bg-grey-custom bg-opacity-[0.41] w-[44px] h-[28px] rounded-[15.91px]"></div>
            <div className="dot  ml-[11px] absolute left-[4px] top-[2.5px] bg-white w-[22.88px] h-[22.75px] rounded-[15.91px] transition"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ToogleSwitch;
