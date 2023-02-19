import "./newSubscriber.css";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

const NewSubscriber = () => {
  //REFACTOR by having only one on change function
  //ADD required fields

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //shorthand object notation
    const subscriber = {
      fullName,
      date,
      email,
      subscriptionType,
      paymentAmount,
    };
    console.log(subscriber);
    //Sending post request to backend express server, receive and store response

    const response = await axios.post(
      "http://localhost:8080/clients/addClient",
      subscriber
    );

    if (response.status === 200) {
      alert("New subscriber has been successfully ADDED!");
      //prevent page refresh
      //NOT EXACTLY sure, something related to not having to refresh page to view latest data
      window.location.reload(false);
    }
    //RESETTING FORM after submission
    setFullName("");
    setEmail("");
    setDate("");
    setSubscriptionType("");
    setPaymentAmount("");
  };

  return (
    <div className="newSubscriber">
      <h1 className="newSubscriberTitle">New Subscriber</h1>
      <form className="newSubscriberForm" onSubmit={handleSubmit}>
        <div className="newSubscriberItem">
          <label>Full Name</label>
          {/* Need value prop for resetting the input fields */}
          <input
            type="text"
            placeholder="John Smith"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="newSubscriberItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="johnsmith@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="newSubscriberItem">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="newSubscriberItem">
          {/* Deleted htmlFor att in label and id in select Felt it was redundant*/}
          <label>Subscription Type</label>
          <select
            className="newSubscriberSelect"
            value={subscriptionType}
            onChange={(e) => setSubscriptionType(e.target.value)}
          >
            <option>1-Time</option>
            <option>Lifetime</option>
          </select>
        </div>
        <div className="newSubscriberItem">
          <label>Payment Amount (in US$)</label>
          <select
            className="newSubscriberSelect"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          >
            <option>1,000</option>
            <option>10,000</option>
          </select>
        </div>
        <button className="newSubscriberButton">
          <Add className="newSubscriberIcon" />
          Create
        </button>
      </form>
    </div>
  );
};
export default NewSubscriber;
