import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/courses";
import CourseDetail from "./pages/CourseDetail";
import Footer from "./pages/Footer";
import Admin from "./pages/Admin";
import AdminDashboard from "./components/AdminDashboard";
import ManageUsers from "./components/adminComponents/manageUsers";
import ManageCourse from "./components/adminComponents/ManageCourse";
import MyCourses from "./components/myCourses";
import TakeQuiz from "./components/quizComponent/TakeQuiz";
import AdminManageQuiz from "./components/quizComponent/AdminManageQuiz";



function App() {
  const [loggedIn,setLoggedIn] =useState(localStorage.getItem('loggedIn') || false);
  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element= {<Courses/>}/>
            <Route path="/courses/:id" element= {<CourseDetail/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="mycourse" element={<MyCourses/>}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/managequiz" element={<AdminManageQuiz />} />
          {/* <Route path="/quiz/:id" element={<TakeQuiz/>}/> */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/manageuser" element={<ManageUsers />} />
          <Route path="/managecourse" element={<ManageCourse />} />
        </Routes>
      </div>
      <div className="bottom"><Footer/></div>
      
    </Router>
  );
}

export default App;
