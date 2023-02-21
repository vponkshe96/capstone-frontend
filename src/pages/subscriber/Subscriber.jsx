// Objective:
//Send GET REQUEST to types model
//Send PUT REQUEST to subscribers model
import "./subscriber.css";
import { useState, useEffect } from "react";
import { Edit } from "@mui/icons-material";
import axios from "axios";

const Subscriber = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");

  //GET REQUEST to types model
  useEffect(() => {
    const fetchTypes = async () => {
      const rawResponse = await axios.get("");
      //receive in json format coz that's the format the backend sends us the data, array of objects
      const response = rawResponse.data;
      setSubscriptionType(response);
    };
    fetchTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //shorthand object notation
    const subscriber = {
      fullName,
      date,
      email,
      subscriptionType,
    };
    console.log(subscriber);

    // const response = await axios.put("", subscriber);

    // if (response.status === 200) {
    //   alert("Subscriber has been successfully edited!");
    //   //prevent page refresh
    //   //NOT EXACTLY sure, something related to not having to refresh page to view latest data
    //   window.location.reload(false);
    // }
    //RESETTING FORM after submission
    setFullName("");
    setEmail("");
    setDate("");
    setSubscriptionType("");
  };

  return (
    <div className="subscriber">
      <h1 className="subscriberTitle">Edit Subscriber</h1>
      <form className="subscriberForm" onSubmit={handleSubmit}>
        <div className="subscriberItem">
          <label>Full Name</label>
          {/* Need value prop for resetting the input fields */}
          <input
            type="text"
            placeholder="John Smith"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="subscriberItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="johnsmith@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="subscriberItem">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="subscriberItem">
          {/* Deleted htmlFor att in label and id in select Felt it was redundant*/}
          <label>Subscription Type</label>
          <select
            className="subscriberSelect"
            value={subscriptionType}
            onChange={(e) => setSubscriptionType(e.target.value)}
          >
            <option>1-Time</option>
            <option>Lifetime</option>
          </select>
        </div>
        <button className="subscriberButton">
          <Edit className="subscriberIcon" />
          Edit
        </button>
      </form>
    </div>
  );
};
export default Subscriber;
