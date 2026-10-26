import "./App.css";
<<<<<<< HEAD
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import BoardList from "./pages/boards/BoardList";
import BoardWrite from "./pages/boards/BoardWrite";
import BoardDetail from "./pages/boards/BoardDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/board/write" element={<BoardWrite />} />
          <Route path="/board/detail" element={<BoardDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
=======
import Average from "./Average";

import Count from "./Count";
import Infomation from "./Infomation";

function App() {
  return <Average />;
>>>>>>> f6d74caf9cccdfca9eebce8330c96269b8fa215f
}

export default App;
