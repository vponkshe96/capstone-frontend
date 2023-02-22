import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Business from "./pages/business/Business";
import "./app.css";
import NewSubscriber from "./pages/newSubscriber/NewSubscriber";
import Subscriber from "./pages/subscriber/Subscriber";
import SubscriberList from "./pages/subscriberList/SubscriberList";
import SubscriptionList from "./pages/subscriptionList/SubscriptionList";
import NewSubscription from "./pages/newSubscription/NewSubscription";
import LogIn from "./pages/login/LogIn";
import Register from "./pages/register/Register";
const App = () => {
  return (
    //wrapping the whole app with Router Component
    <BrowserRouter>
      <div>
        <Topbar />
        <div className="container">
          {/* <Sidebar /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
            {/* <Route path="/newSubscription" element={<NewSubscription />} /> */}
            <Route path="/business" element={<Business />} />
            <Route path="/subscribers" element={<SubscriberList />} />
            <Route path="/subscribers/:subscriberId" element={<Subscriber />} />
            <Route path="/newSubscriber" element={<NewSubscriber />} />
            {/* <Route path="/subscriptions" element={<SubscriptionList />} /> */}
            <Route path="/newSubscription" element={<NewSubscription />} />
            {/* <Route
              path="/subscriptions/:subscriptionId"
              element={}
            /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
