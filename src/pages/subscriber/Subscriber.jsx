import "./subscriber.css";
import {
  PermIdentity,
  MailOutline,
  CalendarToday,
  PhoneAndroid,
  LocationSearching,
  Publish,
} from "@mui/icons-material";

const Subscriber = () => {
  return (
    <div className="subscriber">
      <div className="subscriberTitleContainer">
        <h1 className="subscriberTitle">Edit Subscriber</h1>
      </div>
      <div className="subscriberContainer">
        <div className="subscriberDisplay">
          {/* <div className="subscriberDisplayTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="subscriberDisplayImg"
            />
            <div className="subscriberDisplayTopTitle">
              <span className="subscriberDisplaysubscribername">
                Anna Becker
              </span>
              <span className="subscriberDisplaysubscriberTitle">
                Software Engineer
              </span>
            </div>
          </div> */}
          <div className="subscriberDisplayBottom">
            <span className="subscriberDisplayTitle">Contact Details</span>
            <div className="subscriberDisplayInfo">
              <PermIdentity className="subscriberDisplayIcon" />
              <span className="subscriberDisplayInfoTitle">Anna Becker</span>
            </div>
            <div className="subscriberDisplayInfo">
              {/* <CalendarToday className="subscriberDisplayIcon" /> */}
              <MailOutline className="subscriberDisplayIcon" />
              <span className="subscriberDisplayInfoTitle">
                annabecker@gmail.com
              </span>
            </div>
            <span className="subscriberDisplayTitle">Account Details</span>
            <div className="subscriberDisplayInfo">
              <PhoneAndroid className="subscriberDisplayIcon" />
              <span className="subscriberDisplayInfoTitle">+1 123 456 67</span>
            </div>
            <div className="subscriberDisplayInfo">
              <MailOutline className="subscriberDisplayIcon" />
              <span className="subscriberDisplayInfoTitle">
                annabeck99@gmail.com
              </span>
            </div>
            <div className="subscriberDisplayInfo">
              <LocationSearching className="subscriberDisplayIcon" />
              <span className="subscriberDisplayInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="subscriberUpdate">
          <span className="subscriberUpdateTitle">Edit</span>
          <form className="subscriberUpdateForm">
            <div className="subscriberUpdateLeft">
              <div className="subscriberUpdateItem">
                <label>subscribername</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="subscriberUpdateInput"
                />
              </div>
              <div className="subscriberUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="subscriberUpdateInput"
                />
              </div>
              <div className="subscriberUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="subscriberUpdateInput"
                />
              </div>
              <div className="subscriberUpdateItem">
                <label>Date</label>
                <input type="date" className="subscriberUpdateInput" />
              </div>
              <div className="subscriberUpdateItem">
                <label for="subscriptionType">Subscription Type</label>
                <select className="newsubscriberSelect" id="subscriptionType">
                  <option>1-Time</option>
                  <option>Lifetime</option>
                </select>
              </div>
              <div className="subscriberUpdateItem">
                <label for="paymentAmount">Payment Amount (in US$)</label>
                <select className="newsubscriberSelect" id="payment">
                  <option>1,000</option>
                  <option>10,000</option>
                </select>
              </div>
            </div>
            <div className="subscriberUpdateRight">
              <div className="subscriberUpdateUpload">
                <img
                  className="subscriberUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                {/* Using icon instead of default choose file textbox */}
                <label htmlFor="file">
                  <Publish className="subscriberUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="subscriberUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Subscriber;
