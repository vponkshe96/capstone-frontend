// Objective: Send POST REQUEST to types model
import "./newSubscription.css";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

const NewSubscription = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //shorthand object notation
    const subscription = {
      name,
      price,
      cost,
    };
    console.log(subscription);
    //POST REQUEST HERE, receive and store response
    const response = await axios.post("", subscription);

    if (response.status === 200) {
      alert("New subscription has been successfully ADDED!");
    }

    //RESETTING FORM after submission
    setName("");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
