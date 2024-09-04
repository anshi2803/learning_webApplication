import axios from "axios";
import React, { useEffect, useState } from "react";

function Admin() {
    const [courses, setCourses]= useState([]);
    const [newCourse, setNewCourse]= useState('');
    const [editCourseId, setEditCourseId]= useState(null);
    const [editCourseName, setEditCourseName]= useState('');

    const fetchCourses= async ()=>{
        const resp= await axios.get('http://localhost:8080/api/courses');
        setCourses(resp.data);
    };
    useEffect(()=>{
        fetchCourses();
    },[]);

    const handleAddCourse= async ()=>{
        if(newCourse){
            const resp= await axios.post('http://localhost:8080/api/courses', {title: newCourse});
           fetchCourses();
            setNewCourse('');
        }
    };

    const handleDeleteCourse= async(id)=>{
        await axios.delete(`http://localhost:8080/api/courses/${id}`);
        setCourses(courses.filter(course=> (course.id !== id)));
    }

    const handleEditCourse= (id,name)=>{
        setEditCourseId(id);
        setEditCourseName(name);
    }

    const handleUpdateCourse =async ()=>{
        const resp= await axios.put(`http://localhost:8080/api/courses/${editCourseId}`, {title: editCourseName});
        setCourses(courses.map(course=>
            (course.id===editCourseId? resp.data: course)));
            setEditCourseId(null);
            setEditCourseName('');
    };

    return (
        <div className="admin-container">
            <h2>Admin Dashboard</h2>

            <div className="course-form">
                <input type="text" value={newCourse} 
                onChange={(e)=> setNewCourse(e.target.value)} 
                placeholder="Add New Course"
                className="form-control"/>
                <button onClick={handleAddCourse} className="btn btn-success mt-2">
                    Add Course
                </button>
            </div>

            {/* edit course */}
            {editCourseId && (
                <div className="course-form">
                    <input type="text"
                    value={editCourseName}
                    onChange={(e)=> setEditCourseName(e.target.value)} 
                    placeholder="Edit Course Name"
                    className="form-control"/>
                    <button onClick={handleUpdateCourse} className="btn btn-success mt-2">Update Course</button>
                </div>
            )}

            {/* course list */}
            <ul className="course-list mt-4">
                {courses.map(course=>(
                    <li key={course.id} className="d-flex justify-content-between align-items-center">
                        {course.title}
                        <div>
                            <button onClick={() => handleEditCourse(course.id,course.name)}
                             className="btn btn-info btn-sm mr-2"> Edit</button>
                            <button onClick={() => handleDeleteCourse(course.id)}
                             className="btn btn-danger btn-sm "> Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

      );
}

export default Admin;