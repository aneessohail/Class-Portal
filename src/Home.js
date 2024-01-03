import React, { useState, useEffect } from 'react';
import { storage, db } from './firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { collection, getDocs } from 'firebase/firestore';
import './Home.css';

function Home() {
  const [fileList, setFileList] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchFilesAndAnnouncements = async () => {
      try {
        
        const storageRef = ref(storage, 'Pdf');
        const listResult = await listAll(storageRef);
        const urls = await Promise.all(listResult.items.map(async (itemRef) => {
          const downloadURL = await getDownloadURL(itemRef);
          return { name: itemRef.name, url: downloadURL };
        }));
        setFileList(urls);

        
        const announcementsCollection = collection(db, 'announcements');
        const querySnapshot = await getDocs(announcementsCollection);
        const announcementsData = querySnapshot.docs.map((doc) => doc.data());
        setAnnouncements(announcementsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFilesAndAnnouncements();
  }, []); 

  useEffect(() => {
    const fetchNewAnnouncements = async () => {
      try {
        const announcementsCollection = collection(db, 'announcements');
        const querySnapshot = await getDocs(announcementsCollection);
        const newAnnouncementsData = querySnapshot.docs.map((doc) => doc.data());
        setAnnouncements(newAnnouncementsData);
      } catch (error) {
        console.error('Error fetching new announcements:', error);
      }
    };

    const interval = setInterval(() => {
      fetchNewAnnouncements();
    }, 5000);

    return () => clearInterval(interval);
  }, []); 
  return (
    <>
    <marquee behavior="smooth" className="Notice">You Will Get Time To Time Announcements And Notes From Here</marquee>
    <div className="container">
      <div className="announcement-section">
        {announcements.length > 0 && (
          <div>
            <h2>Announcements</h2>
            <ol>
              {announcements.map((announcement, index) => (
                <li key={index} className="message-card">{announcement.message}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
      <div>
        <br />
        <br />
        <h2>Here U Will Get <span style={{color:'red'}}>Course Books,</span> <span style={{color:'blue'}}>Assignments ,</span> <span style={{color:'yellow'}}>and </span><span style={{color:'#389006'}}>Class Announcements</span></h2>
        <br /><br />
        <ul className="fileList">
          {fileList.map((file, index) => (
            <li key={index}>
              <div style={{ transitionDelay: `${index * 50}ms` }} className="card">
                <a href={file.url} className="link" target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Home;


