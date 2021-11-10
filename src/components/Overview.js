import "../index.css";
import ToogleSwitch from "./ToogleSwitch";

const Overview = () => {
  return (
    <div>
      <div className="flex  m-auto justify-between">
        <div className ="text-[22px] font-medium text-white">Overview</div>
        <ToogleSwitch />
      </div>
    </div>
  );
};

export default Overview;
