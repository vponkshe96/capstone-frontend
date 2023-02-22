// Objective: Send POST REQUEST to types model
import "./newSubscription.css";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const NewSubscription = () => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    console.log(decodedToken);
    const usersId = decodedToken.id;
    //shorthand object notation
    const subscription = {
      type,
      price,
      cost,
      usersId,
    };
    console.log(subscription);
    //POST REQUEST HERE, receive and store response

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      `http://localhost:8080/users/createType`,
      subscription,
      config
    );

    if (response.status === 200) {
      alert("New subscription has been successfully added!");
    }

    //RESETTING FORM after submission
    setType("");
    setPrice("");
    setCost("");
  };

  return (
    <div className="newSubscription">
      <h1 className="newSubscriptionTitle">Create a New Subscription</h1>
      <form className="newSubscriptionForm" onSubmit={handleSubmit}>
        <div className="newSubscriptionItem">
          <label>Subscription Name</label>
          {/* Need value prop for resetting the input fields */}
          <input
            type="text"
            placeholder="Basic"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="newSubscriptionItem">
          <label>Price (in $USD)</label>
          <input
            type="number"
            placeholder="1000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="newSubscriptionItem">
          <label>Cost of Production (in $USD)</label>
          <input
            type="number"
            placeholder="500"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <button className="newSubscriptionButton">
          <Add className="newSubscriptionIcon" />
          Create
        </button>
      </form>
    </div>
  );
};
export default NewSubscription;
