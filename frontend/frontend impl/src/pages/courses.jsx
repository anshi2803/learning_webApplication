import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";

function Courses() {
    const [courses, setCourses]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(null);

    useEffect(()=> {
        const fetchCourses= async()=>{
            try {
                const resp= await axios.get('http://localhost:8080/api/courses');
                setCourses(resp.data)
            } catch (error) {
                setError('Error in fetching courses')
            }
            finally{
                setLoading(false)
            }
        };
        fetchCourses();
    }, []);

    if(loading) 
        return <p>Loading....</p>;
    if(error)
        return <p>{error}</p>;

    return ( 
        <div className="row">
            {courses.map(course=>(
                <div key={course.id} className="col-md-4" >
                    <CourseCard course={course}/>
                </div>
            ))}
        </div>
     );
}

export default Courses;