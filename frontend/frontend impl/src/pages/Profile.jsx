import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [student, setStudent] = useState([]);
  const [registeredCourse, setRegisteredCourse] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchRegisteredCourses = async () => {
      try {
        const sid = localStorage.getItem('sid');
        if (!sid)
          return;
        const resp = await axios.get(`http://localhost:8080/api/student/${sid}`)
        setRegisteredCourse(resp.data.courses);
        setStudent(resp.data)
      }
      catch (error) {
        alert("Failed to fetch Registered Courses");
      };
    };
    fetchRegisteredCourses();
  }, []);

  return (
    <div>
      <br />
      {
        student &&
        <>
          <h1>{student.name}'s Profile</h1>
          <p><b>Email: </b> {student.email}</p>
          <hr /><br />

          <h4 className="text-center"> My Enrolled Courses</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Instructor</th>
                <th>Duration</th>
                <th>Assesment</th>
              </tr>
            </thead>
            <tbody>
              {registeredCourse.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td>{course.instructor}</td>
                  <td>{course.duration} hours</td>
                  <td><Link to="/quiz/" className="btn text-bg-success text-center btn-sm">
                    Take Quiz <br /></Link></td>
                </tr>
              ))}

            </tbody>

          </table>

        </>
      }
    </div>
  );
}

export default Profile;