import "./user.css";
import {
  PermIdentity,
  MailOutline,
  CalendarToday,
  PhoneAndroid,
  LocationSearching,
  Publish,
} from "@mui/icons-material";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userDisplayImg"
            />
            <div className="userDisplayTopTitle">
              <span className="userDisplayUsername">Anna Becker</span>
              <span className="userDisplayUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className="userDisplayTitle">Account Details</span>
            <div className="userDisplayInfo">
              <PermIdentity className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">Anna Becker</span>
            </div>
            <div className="userDisplayInfo">
              <CalendarToday className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">annabecker@gmail.com</span>
            </div>
            <span className="userDisplayTitle">Contact Details</span>
            <div className="userDisplayInfo">
              <PhoneAndroid className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userDisplayInfo">
              <MailOutline className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userDisplayInfo">
              <LocationSearching className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Date</label>
                <input type="date" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label for="subscriptionType">Subscription Type</label>
                <select className="newUserSelect" id="subscriptionType">
                  <option>1-Time</option>
                  <option>Lifetime</option>
                </select>
              </div>
              <div className="userUpdateItem">
                <label for="paymentAmount">Payment Amount (in US$)</label>
                <select className="newUserSelect" id="payment">
                  <option>1,000</option>
                  <option>10,000</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                {/* Using icon instead of default choose file textbox */}
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;
