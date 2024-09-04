import axios from "axios";
import React, { useEffect, useState } from "react";


function ManageCourse() {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ title: "", description: "", instructor: "", duration: "", imgUrl: "" });
    const [editCourse, setEditCourse] = useState({ title: "", description: "", instructor: "", duration: "", imgUrl: "" });
    const [editCourseId, setEditCourseId] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const resp = await axios.get('http://localhost:8080/api/courses');
            setCourses(resp.data);
        } catch (error) {
            console.log("Error in fetching courses");
        }
    }

    const handleAddCourse = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post("http://localhost:8080/api/courses", newCourse);
            if (resp.status === 201) {
                fetchCourses();
                setNewCourse({ title: "", description: "", instructor: "", duration: "", imgUrl: "" });
            }
        } catch (error) {
            setError("Failed to add Course");
        }
    }

    const handleDeleteCourse = async (id) => {
        try {
            const resp = await axios.delete(`http://localhost:8080/api/courses/${id}`);
            if (resp.status === 200) {
                fetchCourses();
            }
        } catch (error) {
            console.log("Error in deleting courses");
        }
    };

    const handleEditCourse = (course) => {
        setEditCourse(course);
        setEditCourseId(course.id);
    };

    const handleUpdateCourse = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.put(`http://localhost:8080/api/courses/${editCourseId}`, editCourse);
            if (resp.status === 200) {
                fetchCourses();
                setEditCourse({ title: "", description: "", instructor: "", duration: "", imgUrl: "" });
                setEditCourseId(null);
            }
        } catch (error) {
            console.error('Error in updating courses:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Manage Courses</h2> <hr />
            {error && <div className="alert alert-danger">{error}</div>}

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Instructor</th>
                        <th>Duration</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.instructor}</td>
                            <td>{course.duration}</td>
                            <td>
                                <button className="btn btn-sm btn-primary"
                                    onClick={() => handleEditCourse(course)}>Edit</button>
                                <button className="btn btn-sm btn-danger ml-2"
                                    onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table><hr /><br />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h3>Add/Update Course</h3><br />
                        <form onSubmit={editCourseId ? handleUpdateCourse : handleAddCourse}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" value={editCourseId ? editCourse.title : newCourse.title}
                                    onChange={(e) => editCourseId ? setEditCourse({ ...editCourse, title: e.target.value }) : setNewCourse({ ...newCourse, title: e.target.value })} />
                            </div> <br />
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" value={editCourseId ? editCourse.description : newCourse.description}
                                    onChange={(e) => editCourseId ? setEditCourse({ ...editCourse, description: e.target.value }) : setNewCourse({ ...newCourse, description: e.target.value })} />
                            </div> <br />
                            <div className="form-group">
                                <label>Instructor</label>
                                <input type="text" className="form-control" value={editCourseId ? editCourse.instructor : newCourse.instructor}
                                    onChange={(e) => editCourseId ? setEditCourse({ ...editCourse, instructor: e.target.value }) : setNewCourse({ ...newCourse, instructor: e.target.value })} />
                            </div> <br />
                            <div className="form-group">
                                <label>Duration</label>
                                <input type="text" className="form-control" value={editCourseId ? editCourse.duration : newCourse.duration}
                                    onChange={(e) => editCourseId ? setEditCourse({ ...editCourse, duration: e.target.value }) : setNewCourse({ ...newCourse, duration: e.target.value })} />
                            </div> <br />
                            <div className="form-group">
                                <label>Image URL</label>
                                <input type="text" className="form-control" value={editCourseId ? editCourse.imgUrl : newCourse.imgUrl}
                                    onChange={(e) => editCourseId ? setEditCourse({ ...editCourse, imgUrl: e.target.value }) : setNewCourse({ ...newCourse, imgUrl: e.target.value })} />
                            </div><br />
                            <button type="submit" className="btn btn-success">{editCourseId ? "Update Course" : "Add Course"}</button>
                        </form>
                    </div></div></div>


        </div>
    );
}

export default ManageCourse;
