//Send PUT REQUEST to subscribers model
import "./subscriber.css";
import { useState, useEffect } from "react";
import { Edit } from "@mui/icons-material";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Sidebar from "../../components/sidebar/Sidebar";

const Subscriber = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [typesId, setTypesId] = useState(null);
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
    //shorthand object notation
    const subscriber = {
      fullName,
      date,
      email,
      typesId,
      usersId,
    };
    console.log(subscriber);

    const response = await axios.put("", subscriber);
    if (response.status === 200) {
      alert("Subscriber has been successfully edited!");
    }
    setFullName("");
    setEmail("");
    setDate("");
    setTypesId("");
  };

  return (
    <>
      <Sidebar />
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
          <button className="subscriberButton">
            <Edit className="subscriberIcon" />
            Edit
          </button>
        </form>
      </div>
    </>
  );
};
export default Subscriber;
