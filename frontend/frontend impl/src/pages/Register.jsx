import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "../services/auth";
import axios from "axios";

function Register() {
    const [student, setStudent] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:8080/api/student', student);
            // localStorage.saveItem(resp);
            if (resp.status == 201) {
                alert("Registered Successfully")
                navigate("/login")
            }
        } catch (error) {
            alert("Error occured");
            console.log(error)
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mt-5">Register</h2><hr />
                    {error && <div className="alert alert-danger"> {error}</div>}
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                                value={student.name}
                                onChange={(e) => setStudent({ ...student, name: e.target.value })}
                                required />
                        </div><br />
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={student.email}
                                onChange={(e) => setStudent({ ...student, email: e.target.value })}
                                required />
                        </div><br />
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="SECRET"
                                value={student.password}
                                onChange={(e) => setStudent({ ...student, password: e.target.value })}
                                required />
                        </div> <br />
                        <button type="submit" className="btn btn-success btn-block w-100">Register</button>
                    

                        <p className="text-center mt-3">
                            Already have a Account? <Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;