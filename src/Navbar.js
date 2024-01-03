import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { auth } from './firebase'; 
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = auth.currentUser !== null;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/'); 
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg py-2 mb-4">
      <div className="container-fluid">
        <a className="navbar-brand"><span style={{color:'purple'}}>Class Portal</span></a>
        <button className="navbar-toggler my-2 mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center align-items-start" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-self-center tipu text-start my-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cards">Teachers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">Feedback</Link>
            </li>
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/announcement-form">Announcement Form</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/file-upload">File Upload</Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex flex-grow-1 justify-content-end align-center mx-5">
            {isLoggedIn ? (
              <button className="btn btn-outline-danger my-2" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to='/admin'>
                <button className="btn btn-outline-success my-2 text-white">Admin</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
