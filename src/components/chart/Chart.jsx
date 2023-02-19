import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey }) => {
  return (
    <div className="chart">
      <div className="chartItem">
        <h3 className="chartTitle">{title}</h3>
        {/* width needs to be 99% for chart to be responsive */}
        <ResponsiveContainer width="99%" aspect={2.5 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Chart;
