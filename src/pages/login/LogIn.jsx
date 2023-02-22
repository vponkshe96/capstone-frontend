import "./logIn.css";
import { useState } from "react";
import { Login } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //shorthand object notation
    const user = {
      email,
      password,
    };
    console.log(user);

    //for handling scenario where user already exists
    try {
      const response = await axios.post(
        "http://localhost:8080/users/logIn",
        user
      );
      console.log(response);
      //response is a JSON object which will have JWT token in token property of data property
      const { data } = response;
      const { token } = data;
      //save JWT in local storage
      localStorage.setItem("token", token);
      //move user to login page via useNavigate hook
      navigate("/newSubscription");
    } catch (error) {
      setError(error.response.data.msg);
    }
  };
  return (
    <div className="logIn">
      <h1 className="logInTitle">Enter your details to login</h1>
      <form className="logInForm" onSubmit={handleSubmit}>
        <div className="logInItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="johnsmith@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="logInItem">
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          //ADD CSS TO HANDLE THIS
          <div className="errorContainer">
            <p className="formError">{error}</p>
          </div>
        )}
        <button className="logInButton">
          <Login className="logInIcon" />
          Login
        </button>
      </form>
    </div>
  );
};
export default LogIn;
