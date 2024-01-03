import React, { useState } from 'react';
import { db } from './firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function AnnouncementForm() {
  const [announcementText, setAnnouncementText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (announcementText.trim() !== '') {
        const announcementsCollection = collection(db, 'announcements');
        await addDoc(announcementsCollection, {
          message: announcementText,
          timestamp: serverTimestamp(),
        });
        setAnnouncementText('');
        alert('Announcement sent successfully!');
      } else {
        alert('Please enter an announcement message.');
      }
    } catch (error) {
      alert('Failed to send announcement. Error: ' + error.message);
    }
  };

  const styles = `
    .announcement-form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .announcement-form-wrapper {
      width: 100%;
      max-width: 400px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      background-color: #f9f9f9;
    }

    .form-heading {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
      font-size: 24px;
    }

    .announcement-form {
      display: flex;
      flex-direction: column;
      
    }

    .announcement-textarea {
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      resize: vertical;
      font-size: 18px;
      resize:none;
    }

    .send-button {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      background-color: #007bff;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .send-button:hover {
      background-color: #0056b3;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="announcement-form-container">
        <div className="announcement-form-wrapper">
          <h2 className="form-heading">Send Announcement</h2>
          <form onSubmit={handleSubmit} className="announcement-form">
            <textarea
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
              placeholder="Enter your announcement here..."
              className="announcement-textarea"
              rows="6"
            />
            <button type="submit" className="send-button">
              Send Announcement
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AnnouncementForm;
