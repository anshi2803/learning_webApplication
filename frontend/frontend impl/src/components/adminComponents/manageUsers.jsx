import axios from "axios";
import React, { useEffect, useState } from "react";

function ManageUsers() {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const resp = await axios.get('http://localhost:8080/api/student');
            setStudent(resp.data);

        } catch (error) {
            console.log("Error in fetching students", error);
        }
    }

    const handleDeleteStudent = async (id) => {
        try {
            const resp = await axios.delete(`http://localhost:8080/api/student/${id}`);
            if (resp.status === 200) {
                fetchStudents();
            }
        }
        catch (error) {
            console.log("Error in deleting User", error);

        }
    };
    
    return (
        // <div className="manage-users">
        //     <h2 className="text-align-center">Manage Users</h2>
        //     <ul className="list-group">
        //         {student.map(student => (
        //             <li key={student.id} className="list-group-item d-flex justify-content-between 
        //             align-items-center">
        //                 {student.name}
        //                 <button className="btn btn-danger btn-sm" onClick={() =>
        //                     handleDeleteStudent(student.id)} > Delete</button>
                            
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <div className="manage-users" style={{ padding: '20px' }}>
    <h2 className="text-align-center" style={{ textAlign: 'center' }}>Manage Users</h2>
    <ul className="list-group" style={{ listStyleType: 'none', padding: 0 }}>
        {student.map(student => (
            <li 
                key={student.id} 
                className="list-group-item d-flex justify-content-between align-items-center" 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '10px', 
                    border: '1px solid #ccc', 
                    marginBottom: '10px' 
                }}
            >
                {student.name}
                <button 
                    className="btn btn-danger btn-sm" 
                    style={{ 
                        backgroundColor: '#dc3545', 
                        border: 'none', 
                        padding: '5px 10px' 
                    }} 
                    onClick={() => handleDeleteStudent(student.id)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
</div>

    );
}

export default ManageUsers;