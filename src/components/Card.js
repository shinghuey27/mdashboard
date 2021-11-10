import "../index.css";
const account = [
  {
    type: "Business Account",
    amount: 1000420.0,
    number: 3,
    cat:"Accounts"
  },
  {
    type: "Fixed Deposit",
    amount: 500000.0,
    number: 2,
    cat:"Accounts"

  },
  {
    type: "Loans",
    amount: 585430.0,
    number: 3,
    cat:"Accounts"

  },
  {
    type: "Hire Purchase",
    amount: 580000.0,
    number: 2,
    cat:"Accounts"

  },
  {
    type: "Credit Cards",
    amount: 56300.0,
    number: 100,
    cat:"Cards"

  },
];

const Card = () => {
  return (
    <div>
      <div className="h-[155px] mt-[1rem] flex flex-row  m-auto">
        {account.map((acc) => (
          <div className="w-[246px] bg-white rounded-[20px] ml-[1rem] nth">
            <div className="pl-[1.25rem] pt-[30px]">
              <div className="text-[16px] font-medium text-[#0e1b42] mb-[1.25rem]">{acc.type}</div>
              <div className="text-[22px] font-normal text-[#0e1b42] mb-[0.6rem]">RM {acc.amount.toLocaleString(navigator.language,{minimumFractionDigits:2})}</div>
              <div className="text-[14px] font-normal text-[#6f7faf]">{acc.number} {acc.cat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
