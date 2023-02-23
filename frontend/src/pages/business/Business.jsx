import Chart from "../../components/chart/Chart";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./business.css";
import "../../components/keyInfo/keyInfo.css";
//info required to make requests to backend
const token = localStorage.getItem("token");
let decodedToken = "";
try {
  decodedToken = jwt_decode(token);
} catch (error) {
  console.log(error);
}
const usersId = decodedToken.id;
const year = 2023;
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const Business = () => {
  const [totalSubscribers, setTotalSubscribers] = useState("");
  // const [subscriberData, setSubscriberData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/subscribers/filterByYear/${usersId}/${year}`,
        config
      );
      console.log(response);
      // const subscriberData = response.data.dataByYear;
      const subscriberCount = response.data.subscriberCount;
      setTotalSubscribers(subscriberCount);
      // setSubscriberData(subscriberData);

      // console.log(subscriberData);
      // const clean = subscriberData.map((subscriber) => ({
      //   Subscribers: 1,
      //   date: "Feb",
      // }));
      // console.log(clean);
      // setSubscriberData(clean);
    };
    fetchData();
  }, []);
  const subscriberData = [
    {
      month: "Jan",
      Subscribers: 4000,
    },
    {
      month: "Feb",
      Subscribers: 5500,
    },
    {
      month: "Mar",
      Subscribers: 4700,
    },
    {
      month: "Apr",
      Subscribers: 7000,
    },
    {
      month: "May",
      Subscribers: 10000,
    },
    {
      month: "June",
      Subscribers: 6500,
    },
    {
      month: "July",
      Subscribers: 4000,
    },
    {
      month: "Aug",
      Subscribers: 11000,
    },
    {
      month: "Sep",
      Subscribers: 15000,
    },
    {
      month: "Oct",
      Subscribers: 8000,
    },
    {
      month: "Nov",
      Subscribers: 9500,
    },
    {
      month: "Dec",
      Subscribers: 6000,
    },
  ];

  return (
    <>
      <Sidebar />
      <div className="business">
        <div className="keyInfoItem">
          <span className="keyInfoTitle">Total Subscribers in 2023</span>
          <div className="keyInfoMoneyContainer">
            <span className="icon">
              <PersonIcon />
            </span>
            <span className="keyInfoMoney">{totalSubscribers}</span>

            {/* <span className="keyInfoMoneyRate"> */}
            {/* <ArrowDownward className="keyInfoIcon negative" /> */}
            {/* 11.4%
            </span> */}
          </div>
          {/* <span className="keyInfoComp">Compared to last month</span> */}
        </div>
        <Chart
          title="Subscriber Split by Month"
          data={subscriberData}
          dataKey="Subscribers"
        />
      </div>
    </>
  );
};
export default Business;
