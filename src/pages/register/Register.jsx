import "./register.css";
import { useState } from "react";
import { Create } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //to catch any errors in the backend during user registration
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //shorthand object notation
    const user = {
      name,
      email,
      password,
    };
    console.log(user);

    //for handling scenario where user already exists
    try {
      const response = await axios.post(
        "http://localhost:8080/users/signUp",
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
      console.log(error);
      if (error.response && error.response.status === 400) {
        setError("User already exists! Proceed to login");
      }
    }
  };

  return (
    <div className="register">
      <h1 className="registerTitle">Enter your Details to Register</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="registerItem">
          <label>Name</label>
          {/* Need value prop for resetting the input fields */}
          <input
            type="text"
            placeholder="john123"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
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
