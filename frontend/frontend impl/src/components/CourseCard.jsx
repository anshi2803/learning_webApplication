import React from "react";
import { Link } from "react-router-dom";

//display details of individual cards
function CourseCard({ course }) {
    return (
        <div className="card mb-4">
            <div className="card-body"><br /><br />
                <h5 className="card-title">{course.title}</h5>
                {/* <p className="card-text">{course.description}</p> */}
                <p className="card-text"><b>Instructor: </b> {course.instructor}</p>
                <p className="card-text"><b>Duration: </b> {course.duration}</p>
                <img src={course.imgUrl} className="card-img" alt={course.title} height={225}/>
                <br /><br />
                <Link to={`/courses/${course.id}`} className="btn btn-success btn-block">
                    View Course Details</Link>
            </div>
        </div>
    );
};

export default CourseCard;