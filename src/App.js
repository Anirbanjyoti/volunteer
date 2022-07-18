import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import Donation from "./Pages/Donations/Donations";
import Events from "./Pages/Events/Events";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import AidDetails from "./Pages/AidDetails/AidDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route
          path="/donation"
          element={
            <RequireAuth>
              <Donation></Donation>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin></Admin>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/events"
          element={
            <RequireAuth>
              <Events></Events>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/events/:eventId"
          element={<AidDetails></AidDetails>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
