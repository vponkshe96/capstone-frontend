import Chart from "../../components/chart/Chart";
import { subscriberData } from "../../data";
import "./business.css";

const Business = () => {
  return (
    <div className="business">
      <Chart title="Subscribers" data={subscriberData} dataKey="Subscribers" />
    </div>
  );
};
export default Business;
