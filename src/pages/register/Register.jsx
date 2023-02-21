import "./register.css";
import { useState } from "react";
import { Create } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //to catch any errors in the backend during user registration
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //shorthand object notation
    const user = {
      username,
      email,
      password,
    };
    console.log(user);

    //for handling scenario where user already exists
    try {
      const response = await axios.post("", user);
      console.log(response);
      //response is a JSON object which will have JWT token in data property
      const { data } = response;
      //save JWT in local storage
      localStorage.setItem("token", data);
      //move user to login page via useNavigate hook
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
      }
    }
  };

  return (
    <div className="register">
      <h1 className="registerTitle">
        Enter your details to register
      </h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="registerItem">
          <label>Username</label>
          {/* Need value prop for resetting the input fields */}
          <input
            type="text"
            placeholder="john123"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="registerItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="johnsmith@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> 
        <div className="registerItem">
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          //ADD CSS TO HANDLE THIS
          <div className="errorContainer">
            <p className="formError">{error}</p>
          </div>
        )}
        <button className="registerButton">
          <Create className="registerIcon" />
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
