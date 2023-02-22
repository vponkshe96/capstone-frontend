import "./newSubscriber.css";
import { Add } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Sidebar from "../../components/sidebar/Sidebar";

const NewSubscriber = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [typesId, setTypesId] = useState(null);
  //array of subscription types obtained from get req to types model
  const [subscriptionType, setSubscriptionType] = useState([]);
  const token = localStorage.getItem("token");
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

  //GET REQUEST to types model
  useEffect(() => {
    const fetchTypes = async () => {
      const response = await axios.get(
        `http://localhost:8080/users/allTypes/${usersId}`,
        config
      );
      const types = response.data.allTypes;
      setSubscriptionType(types);
    };
    fetchTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const subscriber = {
      fullName,
      date,
      email,
      typesId,
      usersId,
    };
    console.log(subscriber);
    //POST request to subscribers model
    const response = await axios.post(
      "http://localhost:8080/subscribers/addSubscriber",
      subscriber
    );

    if (response.status === 200) {
      alert("New subscriber has been successfully added!");
    }
    setFullName("");
    setEmail("");
    setDate("");
    setTypesId("");
  };

  return (
    <>
      <Sidebar />
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
              required
            />
          </div>
          <div className="newSubscriberItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="johnsmith@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="newSubscriberItem">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="newSubscriberItem">
            <label>Subscription Type</label>
            <select
              className="newSubscriberSelect"
              required
              onChange={(e) => setTypesId(e.target.value)}
            >
              <option value="default">Choose Here</option>
              {subscriptionType.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.type}
                </option>
              ))}
            </select>
          </div>
          <button className="newSubscriberButton">
            <Add className="newSubscriberIcon" />
            Create
          </button>
        </form>
      </div>
    </>
  );
};
export default NewSubscriber;
