const service = [
  {
    img: "macbook.jpg",
    title: "Short and Long Term Working Capital",
  },
  {
    img: "macbook.jpg",
    title: "Excess Cash? Here's How to Make it Grow",
  },
  {
    img: "macbook.jpg",
    title: "Project and Assets Financing",
  },
  {
    img: "macbook.jpg",
    title: "Payment Solutions for Retailers",
  },
];
const Recommended = () => {
  return (
    <div className="bg-white  w-[100%] mt-[3rem] rounded-[15px] h-[384px] mb-[2.6rem] px-[1.25rem] pt-[1.625rem]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[20px] font-medium text-[#0e1b42]">
            Recommended Services
          </h1>
          <p className="text-[16px] font-normal  text-[#6f7faf]">
            Selected to match your business needs
          </p>
        </div>

        <button className="text-[16px] font-medium text-[#01ccce]">
          See All
        </button>
      </div>
      <div className="mt-[1.3rem] flex">
        {service.map((ser) => (
          <div className="h-[265px] w-[239px] border border-[#f1f1f5] rounded-[15px] ml-[1rem] nth">
            <img
              src={ser.img}
              alt={ser.img}
              className="h-[116px] w-[239px] object-cover  rounded-t-[15px] mb-[1rem]"
            />
            <div className="flex flex-col justify-between h-[120px]">
              <h1 className="text-[14px] text-[#0e1b42] font-medium px-[1rem]">
                {ser.title}
              </h1>
              <div className="px-[1rem]">
                <button className="bg-[#ffdd00] rounded-[10px] h-[40px] w-full text-[14px] font-medium text-[#0e1b42] ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
