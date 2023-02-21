import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          {/* <Link to="/">Register</Link>
          <Link to="/login">Login</Link> */}
        </div>
      </div>
    </div>
  );
};
export default Topbar;
