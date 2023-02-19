import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import "./app.css";
import NewSubscriber from "./pages/newSubscriber/NewSubscriber";

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
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<User />} />
            <Route path="/newSubscriber" element={<NewSubscriber />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
