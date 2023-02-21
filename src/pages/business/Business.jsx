import Chart from "../../components/chart/Chart";
import KeyInfo from "../../components/keyInfo/KeyInfo";
import { subscriberData, userData } from "../../dummyData";
import "./business.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      {/* <KeyInfo /> */}
      <Chart title="Subscribers" data={subscriberData} dataKey="Subscribers" />
      <div>Want to do similar chart for revenue and then profit</div>
      <div className="homeWidgets">
        {/* Small screen overflow issue for parent container fixed
        Need to take care of small screen width for children */}
        {/* <WidgetSm />
        <WidgetLg /> */}
      </div>
    </div>
  );
};
export default Home;
