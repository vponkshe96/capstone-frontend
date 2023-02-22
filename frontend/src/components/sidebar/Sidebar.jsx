import "./sidebar.css";
import {
  Logout,
  Timeline,
  TrendingUp,
  AddCircleOutlineOutlined,
  Visibility,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Subscriptions</h3>
          <ul className="sidebarList">
            <Link className="link" to="/newSubscription">
              <li className="sidebarListItem">
                <AddCircleOutlineOutlined className="sidebarIcon" />
                Create
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Subscribers</h3>
          <ul className="sidebarList">
            <Link className="link" to="/newSubscriber">
              <li className="sidebarListItem">
                <AddCircleOutlineOutlined className="sidebarIcon" />
                Create
              </li>
            </Link>
            <Link
              className="link"
              to="/subscribers
            "
            >
              <li className="sidebarListItem">
                <Visibility className="sidebarIcon" />
                View
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Analytics</h3>
          <ul className="sidebarList">
            <Link className="link" to="/business">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Business
              </li>
            </Link>

            <Link
              className="link"
              to="/subscriptions
            "
            >
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Subscriptions
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User Action</h3>
          <ul className="sidebarList">
            <Link
              className="link"
              onClick={() => {
                localStorage.clear();
              }}
              to="/"
            >
              <li className="sidebarListItem">
                <Logout className="sidebarIcon" />
                Log Out
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
