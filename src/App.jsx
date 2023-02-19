import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NewSubscriber from "./pages/newSubscriber/NewSubscriber";
import Subscriber from "./pages/subscriber/Subscriber";
import SubscriberList from "./pages/subscriberList/SubscriberList";

import "./app.css";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
