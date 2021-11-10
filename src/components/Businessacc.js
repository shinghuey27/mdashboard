const account = [
  {
    id: 1,
    name: "Payment Account 01",
    accNo: "113093400119",
    balance: 310000.0,
    staus: "normal",
  },
  {
    id: 2,

    name: "SME First Account",
    accNo: "310121306725",
    balance: 690420.0,
    staus: "normal",
  },
  {
    id: 3,

    name: "Savings Account-i",
    accNo: "113093400119",
    balance: 310000.0,
    staus: "suspended",
  },

];

const Businessacc = () => {
  return (
    <div className="bg-white  w-[100%] mt-[3rem] rounded-[10px] h-[643px] ">
      <div className=" p-[2rem]">
        <div className="text-[20px] font-medium text-[#0e1b42] mb-[1rem]">
          Business Accounts
        </div>
        {account.map((acc) => (
          <div className="bg-[#f8f8f8]  h-[95px] w-[100%] rounded-[10px] p-[1rem] flex mb-[0.5rem] items-center justify-between">
            <div className="flex">
              <div className="rounded-[10px] h-[39px] w-[38px] bg-[#ffdd00] flex justify-center items-center text-[14px] font-medium text-[#0e1b42]">
                0{acc.id}
              </div>
              <div className="ml-[1.25rem]">
                <div className="text-[16px] font-medium text-[#0e1b42]">
                  {acc.name}
                </div>
                <div className="text-[14px] font-normal text-[#6f7faf] ">
                  {acc.accNo}
                </div>
              </div>
            </div>
            <div className="ml-[1.25rem] flex content-center items-center">
                <div className ="flex flex-col w-[285px]">
              <div className="text-[14px] font-normal text-[#6f7faf] ">
                Available Balance
              </div>
              <div className="text-[16px] font-medium text-[#0e1b42] ">
                RM{" "}
                {acc.balance.toLocaleString(navigator.language, {
                  minimumFractionDigits: 2,
                })}
              </div>
              </div>
              <button className="ml-[6.75rem] h-[38px] w-[139px] rounded-[10px] border border-[#6f7faf] text-[#0e1b42] text-[14px] font-normal">More Actions</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Businessacc;
