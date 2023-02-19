import Chart from "../../components/chart/Chart";
import KeyInfo from "../../components/keyInfo/KeyInfo";
import { userData } from "../../dummyData";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <KeyInfo />
      <Chart title="User Analytics" data={userData} dataKey="Active User" />
      <div className="homeWidgets">
        {/* Small screen overflow issue for parent container fixed
        Need to take care of small screen width for children */}
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
export default Home;
