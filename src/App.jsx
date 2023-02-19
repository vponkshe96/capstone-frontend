import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import NewSubscriber from "./pages/newSubscriber/NewSubscriber";
import Subscriber from "./pages/subscriber/Subscriber";
import SubscriberList from "./pages/subscriberList/SubscriberList";
import SubscriptionList from "./pages/subscriptionList/SubscriptionList";

const App = () => {
  return (
    //wrapping the whole app with Router Component
    <BrowserRouter>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          {/* Setting up app routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscribers" element={<SubscriberList />} />
            <Route path="/subscribers/:subscriberId" element={<Subscriber />} />
            <Route path="/newSubscriber" element={<NewSubscriber />} />
            <Route path="/subscriptions" element={<SubscriptionList />} />
            {/* <Route
              path="/subscriptions/:subscriptionId"
              element={}
            />
            <Route path="/newSubscription" element={} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
