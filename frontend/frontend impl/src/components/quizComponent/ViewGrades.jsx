// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function ViewGrades() {
//     const [grades, setGrades]=useState([]);

//     useEffect(()=>{
//         fetchGrades();
//     },[]);
//     const fetchGrades= async()=>{
//         try {
//             const resp=await axios.get('http://localhost:8080/api/grades');
//             setGrades(resp.data);
//         } catch (error) {
//             console.log('Error in fetching grades', error);
//         }
//     };
//     return ( 
//         <div className="view-grades">
//             <h3>My Grades</h3>
//             <ul className="list-group">
//                 {grades.map((grade, index)=>(
//                     <li className="list-group-item" key={index}>
//                         {grade.quizTitle}: {grade.score}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//      );
// };

// export default ViewGrades;