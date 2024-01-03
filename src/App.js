import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// Import your components
import FileUpload from './FileUpload';
import Home from './Home';
import Admin from './Admin';
import AnnouncementForm from './AnnouncementForm';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Cards';
import Feedback from './Feedback';

const App = () => {
  return (
    <Router>
      <ToastContainer /> 
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/announcement-form" element={<AnnouncementForm />} />
          <Route path="/file-upload" element={<FileUpload />} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
