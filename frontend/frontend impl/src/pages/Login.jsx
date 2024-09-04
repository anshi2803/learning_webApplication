import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { login } from '../services/auth';
import axios from "axios";


function Login({setLoggedIn}) {
    const [student, setStudent] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:8080/api/student/login', student);
            if (resp.status === 200) {
                localStorage.setItem("sid", resp.data.id);
                localStorage.setItem('loggedIn',true);
                setLoggedIn(true);
                if (resp.data.role == 1) {
                    navigate("/admin");
                }
                else {
                    navigate("/profile");
                }
            }
            // navigate('/courses');
        } catch (error) {
            alert("Invalid Credentials");
            console.log(error)

        }
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mt-5">Login</h2><hr />
                    {error && <div className="alert alert-danger"> {error}</div>}

                    <form onSubmit={handleLogin}>
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
                        <button type="submit" className="btn btn-success btn-block w-100">Login</button>
                        <p className="text-center mt-3">
                            Don't have a Account? <Link to='/register'>Register here</Link></p>
                    </form>
                </div>
            </div>

            
        </div>
    );
}

export default Login;
