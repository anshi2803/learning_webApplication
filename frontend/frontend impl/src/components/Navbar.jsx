import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar({loggedIn,setLoggedIn}) {
  const navigate = useNavigate();


  const logout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('sid');

    setLoggedIn(false)
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <img src="https://www.pngall.com/wp-content/uploads/5/Learning-PNG-Image-HD.png" alt="logo image"
          height={50} />
        <Link className="navbar-brand" to="/">
          MindQuest
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {
              loggedIn ?
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-link nav-link"
                      onClick={logout}> Logout
                    </button>
                  </li>
                </>
                : 
                  <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                    </li>
                </>  
                
                  
            }

&nsbp;&nsbp;&nsbp;&nsbp;&nsbp;&nsbp;&nsbp;&nsbp;&nsbp;&nsbp;
            <li className="nav-item d-flex" role="search" >
              <input class="form-control me-2" type="search" placeholder="Search Course" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
