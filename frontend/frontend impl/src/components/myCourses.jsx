// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function MyCourses() {
//     const [course, setCourse]= useState([]);
//     const [registeredCourses, setRegisteredCourses] = useState([]);
//     const [error, setError]= useState(null);
//     const sid= useState(localStorage.getItem('sid'));
//     const [cid,setCid]= useState(localStorage.getItem('cid'));

//     const navigate = useNavigate();


//     const fetchRegisteredCourses = async () => {
//         try {
//             const sid = localStorage.getItem('sid');
//             if (!sid)
//                 return;
//             const resp = await axios.get(`http://localhost:8080/api/student/${sid}`);
//             setRegisteredCourses(resp.data.course);
//         } catch (error) {
//             alert("Error in fetching Registered Courses")
//         }
//     };

//     useEffect(() => {
//         fetchRegisteredCourses();
//     }, []);

//     const handleEnroll =  (cid) => {
//          axios.post(`http://localhost:8080/api/student/add/${sid}/courses/${cid}`, {sid,cid})
//         .then(resp=>{
//             alert("Sucessfully Registered");
//             setRegisteredCourses([...registeredCourses,resp.data]);
//         })
//         .catch(error=>{
//             setError("Failed to Register in Course")
//         })
//     }


//     return (
       
//             <div className="container mt-5">
//                 <h3>My Enrolled Courses</h3>

//                 <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Instructor</th>
//                         <th>Duration</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {course.map(course => (
//                         <tr key={course.id}>
//                             <td>{course.title}</td>
//                             <td>{course.description}</td>
//                             <td>{course.instructor}</td>
//                             <td>{course.duration}</td>
//                             <td>
//                                 {
//                                     registeredCourses.some(registeredCourse=> 
//                                         registeredCourse.id=== course.id) ? 
//                                         (
//                                             <button className="btn btn-sm btn-secondary" disabled>
//                                                 Registered
//                                             </button>
//                                         ):(
//                                             <button className="btn btn-sm btn-primary" 
//                                             onClick={()=> handleEnroll(course.id)}>Register </button>
//                                         )
//                                 }
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//                 {/* {registeredCourses.length > 0 ? (
//                     <div className="row">
//                         {registeredCourses.map((course) => (
//                             <div className="col-md-4" key={course.id}>
//                                 <div className="card mb-3">
//                                     <img src="{course.imgUrl}" className="card-img-top" alt="{course.img" />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{course.title}</h5>
//                                         <p className="card-text">{course.description}</p>
//                                         <p><b>Instructor: </b> {course.instructor}</p>
//                                         <p><b>Duration: </b> {course.duration}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ):(
//                     <p>You have not Registered for any courses yet.</p>
//                 )
//                 } */}
//             </div>
      
//     );
// }

// export default MyCourses;