import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import Donation from "./Pages/Donation/Donation";
import Events from "./Pages/Events/Events";
// import RequireAuth from "./Pages/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
   
        <Route path="/donation" element={
          <Donation></Donation>
        }></Route>
        <Route path="/admin-login" element={<Admin></Admin>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
