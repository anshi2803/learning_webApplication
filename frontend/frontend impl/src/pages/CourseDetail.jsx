import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegisterCourse = async () => {
        try {
            const sid = localStorage.getItem("sid");
            if(!sid){
                alert("Please log in to register for a course")
                navigate("/login");
            }
            else
            {
                const resp = await axios.get(`http://localhost:8080/api/student/add/${sid}/courses/${id}`);
                if(resp.status == 200) {
                    alert("Registered Successfully");
                    navigate("/profile");
                } 
            }
        }
        catch(error) {
            alert("Error registering course");
        }
    };
    
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const resp = await axios.get(`http://localhost:8080/api/courses/${id}`);
                setCourse(resp.data);
                setLoading(false);

            } catch (error) {
                setError("Error in fetching data");
                setLoading(false);
            }
           
        };
        fetchCourses();
    }, [id]);

    if (loading)
        return <p>Loading....</p>;
    if (error)
        return <p>{error}</p>;

    return (
        <div className="container mt-5">
            <img src={course.imgUrl} className="card-img" alt={course.title} height={400}/>
            <h1><b>{course.title}</b></h1>
            <p>{course.description}</p>
            <p><b>Instructor: </b> {course.instructor}</p>
            <p><b>Duration: </b> {course.duration}</p><br />
            <button onClick={handleRegisterCourse} className="btn btn-success">Register Course</button>
            
        </div>
    );
}

export default CourseDetail;