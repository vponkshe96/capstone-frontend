import "./topbar.css";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <AttachMoneyIcon
            className="topBarIconLeft"
            color="secondary"
            fontSize="medium"
          />
          <span className="logo">DigiTracker</span>
          <AttachMoneyIcon
            className="topBarIconRight"
            color="secondary"
            fontSize="medium"
          />
          {/* <span className="text">Welcome Guest</span> */}
        </div>
        <div className="topRight">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/register">
            Register
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
