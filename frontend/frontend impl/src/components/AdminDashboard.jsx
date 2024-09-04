import React from "react";
import { Link } from "react-router-dom";
// import ManageCourse from "./adminComponents/ManageCourse";
// import ManageUsers from "./adminComponents/manageUsers";

function AdminDashboard() {
    return (
        <div className="container">
            <h2 className="text-center">Admin Dashboard</h2>
            <p className="text-center p-3">Welcome to admin Dashboard</p>
            <p className="text-center p-2">You can now edit the details of courses and student details</p>
            {/* <div className="container col-md-4 text-align-center">
                <div className="container-fluid ">
            <div className="row col-md-4 text align-center">
                <Link to="/managecourse" className="btn list-group-item list-group-item-action text-bg-success
                text-center btn-lg">
                Manage Courses <br /></Link><br /><hr />
                <Link to="/manageuser" className="btn list-group-item list-group-item-action text-bg-success
                text-center btn-lg">
                Manage Users <br /></Link> <br /><hr />
                <Link to="/managequiz" className="btn list-group-item list-group-item-action text-bg-success
                text-center btn-lg">
                Manage Quiz <br /></Link></div></div>
               
                {/* <div className="row">
                    <ManageCourse/>
                    <button className="btn btn-success"><Link to='/managecourse'>Manage Courses</Link></button>
                </div><br /> 
                <div className="row">
                    <ManageUsers/>
                    <button><Link to='/manageuser'>Manage Users</Link></button>
                </div><br />  */}


            {/* </div> */}
            <div className="container col-md-4" style={{ textAlign: 'center' }}>
                <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', 
                    alignItems: 'center', flexDirection: 'column' }}>
                    <div className="row col-md-4" style={{ display: 'flex', justifyContent: 'center', 
                        alignItems: 'center', flexDirection: 'column' }}>
                        <Link to="/managecourse" className="btn list-group-item list-group-item-action 
                        text-bg-success text-center btn-lg" >
                            Manage Courses <br />
                        </Link>
                        <br /><hr />
                        <Link to="/manageuser" className="btn list-group-item list-group-item-action 
                        text-bg-success text-center btn-lg" >
                            Manage Users <br />
                        </Link>
                        <br /><hr />
                        <Link to="/managequiz" className="btn list-group-item list-group-item-action 
                        text-bg-success text-center btn-lg" >
                            Manage Quiz <br />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminDashboard;