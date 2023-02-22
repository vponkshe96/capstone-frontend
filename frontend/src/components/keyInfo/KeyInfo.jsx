import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./keyInfo.css";

const KeyInfo = () => {
  return (
    <div className="keyInfo">
      <div className="keyInfoItem">
        <span className="keyInfoTitle">Revenue</span>
        <div className="keyInfoMoneyContainer">
          <span className="keyInfoMoney">$2,418</span>
          <span className="keyInfoMoneyRate">
            <ArrowDownward className="keyInfoIcon negative" />
            11.4%
          </span>
        </div>
        <span className="keyInfoComp">Compared to last month</span>
      </div>
      <div className="keyInfoItem">
        <span className="keyInfoTitle">Sales</span>
        <div className="keyInfoMoneyContainer">
          <span className="keyInfoMoney">$4,518</span>
          <span className="keyInfoMoneyRate">
            <ArrowDownward className="keyInfoIcon negative" />
            -1.4%
          </span>
        </div>
        <span className="keyInfoComp">Compared to last month</span>
      </div>
      <div className="keyInfoItem">
        <span className="keyInfoTitle">Cost</span>
        <div className="keyInfoMoneyContainer">
          <span className="keyInfoMoney">$2,215</span>
          <span className="keyInfoMoneyRate">
            <ArrowUpward className="keyInfoIcon" />
            +2.4%
          </span>
        </div>
        <span className="keyInfoComp">Compared to last month</span>
      </div>
    </div>
  );
};
export default KeyInfo;
