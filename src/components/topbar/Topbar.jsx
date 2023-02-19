import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <span className="icon">
            <NotificationsNoneIcon />
          </span>
          <span className="icon">
            <LanguageIcon />
          </span>
          <span className="icon">
            <SettingsIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
