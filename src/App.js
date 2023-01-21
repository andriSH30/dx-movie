import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Bookmark from "./Page/Bookmark/Bookmark";
import History from "./Page/History/History";
import User from "./Page/User/User";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="bookmark" element={<Bookmark />} />
        <Route path="history" element={<History />} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  );
};

export default App;
