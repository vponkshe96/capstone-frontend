import "./subscription.css";
import { useState, useEffect } from "react";
import { Edit } from "@mui/icons-material";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";

const Subscription = () => {
  //useParams hook to get id from URL
  const { subscriptionId } = useParams();
  const id = subscriptionId;
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const token = localStorage.getItem("token");
  //array of subscription types obtained from get req to types model
  const [subscriptionType, setSubscriptionType] = useState([]);
  let decodedToken = "";
  try {
    decodedToken = jwt_decode(token);
  } catch (error) {
    console.log(error);
  }

  const usersId = decodedToken.id;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //shorthand object notation
    const subscription = {
      type,
      price,
      cost,
      usersId,
    };
    console.log(subscription);

    const response = await axios.put(
      `http://localhost:8080/users/editType/${id}`,
      subscription,
      config
    );
    if (response.status === 200) {
      alert("Subscriber has been successfully edited!");
    }
    setType("");
    setPrice("");
    setCost("");
  };

  return (
    <>
      <Sidebar />
      <div className="subscription">
        <h1 className="subscriptionTitle">Edit Subscription</h1>
        <form className="subscriptionForm" onSubmit={handleSubmit}>
          <div className="subscriptionItem">
            <label>Subscription Name</label>
            <input
              type="text"
              placeholder="Basic"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="subscriptionItem">
            <label>Price (in $USD)</label>
            <input
              type="number"
              placeholder="1000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="subscriptionItem">
            <label>Cost of Production (in $USD)</label>
            <input
              type="number"
              placeholder="500"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <button className="subscriptionButton">
            <Edit className="subscriptionIcon" />
            Edit
          </button>
        </form>
      </div>
    </>
  );
};
export default Subscription;
