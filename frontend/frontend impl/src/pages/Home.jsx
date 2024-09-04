import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Courses from "./courses";

function Home() {
  return (

    <div className="home-container mt-5">
      <div className="text-center bg-light p-3 ">
        <h1 className="mt-5"> Welcome to MindQuest Learning....</h1>
        <p className="lead">
          Interactive learning platform for various courses and skill assessments
          for MindQuest Users.
        </p>
        <Link to="/courses" className="btn btn-success btn-lg mt-3">
          Explore Courses
        </Link>
      </div><br />
      
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://static.vecteezy.com/system/resources/previews/001/268/522/non_2x/abstract-big-data-science-background-vector.jpg"
                className="slider-img d-block w-100 " alt="slider1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Big Data</h5>
                <p>A collection of data that is huge in volume</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png"
                className="slider-img d-block w-100" alt="slider2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Full Stack Development</h5>
                <p>Design complete web applications and websites</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://thumbs.dreamstime.com/b/d-rendering-cloud-computing-concept-cloud-internet-technology-concept-background-cloud-computing-cloud-computer-abstract-133100600.jpg"
                className="slider-img d-block w-100" alt="slider3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Cloud Computing</h5>
                <p>Storing and accessing data and programs on remote servers hosted on the internet</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
<br />
      <div className="mt-5">
        <h2 className="text-center mb-4 ">Featured Courses</h2>
        
         {/* <div className="row">

          <div className="col-md-3">
            <div className="card">
              <img src="https://static.vecteezy.com/system/resources/previews/009/298/359/non_2x/3d-illustration-of-web-development-png.png"
                className="card-img" alt="Course 1" height={225} />
              <div className="card-body">
                <h5 className="card-title"> <b>Web Development Basics</b></h5>
                <p className="card-text">Become a Full Stack Developer with Html, CSS, Bootstrap and MySQL. </p>
                <Link to="/courses/1" className="btn btn-outline-success">View Course</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/course-mastheads/CODING+FOUNDATION+WITH+PYTHON.png"
                className="card-img" alt="Course 2" height={200} />
              <div className="card-body">
                <h5 className="card-title"><b>Complete Python From Zero to Hero</b></h5>
                <p className="card-text">Learn Python like a Professional Start from the basics
                  and go all the way to creating your own applications.</p>
                <Link to="/courses/2" className="btn btn-outline-success">View Course</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="https://www.xebiaacademyglobal.com/uploads/courses/course_images/1629196001_6088943223518601d787.png"
                className="card-img" alt="Course 3" height={250} />
              <div className="card-body">
                <h5 className="card-title"><b>Introduction to Data Science</b></h5>
                <p className="card-text">Learn Data Analystics, Machine Learning and Deep Learning. </p>
                <Link to="/courses/3" className="btn btn-outline-success">View Course</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/angular-logo.png"
                className="card-img" alt="Course 4" height={225} />
              <div className="card-body">
                <h5 className="card-title"><b>Angular- Complete Guide</b></h5>
                <p className="card-text">Master Angular and build awesome, reactive web apps with the
                  successor of Angular.js. </p>
                <Link to="/courses/4" className="btn btn-outline-success">View Course</Link>
              </div>
            </div>
          </div>

          <div className="section text-center mt-5">
            <h2>Ready Explore your potential?</h2>
            <p>Join us to gain access to the world of knowledge.</p>
            <Link to="/register" className="btn btn-success btn-lg">Join Now</Link>
          </div>
          
        </div>   */}
        <Courses />
        <div className="section text-center mt-5">
            <h2>Ready Explore your potential?</h2>
            <p>Join us to gain access to the world of knowledge.</p>
            <Link to="/register" className="btn btn-success btn-lg">Join Now</Link>
          </div>
      </div>

    </div>


  );
};

export default Home;
