import "./logIn.css";
import { useState } from "react";
import { Login } from "@mui/icons-material";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="logIn">
      <h1 className="logInTitle">
        Welcome to Dashboard: Enter your details to login!
      </h1>
      <form className="logInForm">
        <div className="logInItem">
          <label>Username</label>
          {/* Need value prop for resetting the input fields */}
          <input
            type="text"
            placeholder="john123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="logInItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="johnsmith@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="logInItem">
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="logInButton">
          <Login className="logInIcon" />
          Login
        </button>
      </form>
    </div>
  );
};
export default LogIn;
