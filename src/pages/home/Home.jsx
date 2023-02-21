import "./home.css";
import { Create, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <h1 className="title">
          Welcome to Dashboard, select register or login to get started
        </h1>
        <Link className="link" to="/register">
          <button className="registerButton">
            <Create className="registerIcon" />
            Register
          </button>
        </Link>
        <Link className="link" to="/login">
          <button className="logInButton">
            <Login className="logInIcon" />
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
