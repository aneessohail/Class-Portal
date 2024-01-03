import React, { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './FileUpload.css';

function FileUpload() {
  const [pdf, setPdf] = useState(null);

  const notifyError = (message) => {
    toast.error(message, { position: toast.POSITION.TOP_CENTER }); 
  };

  const notifySuccess = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_CENTER }); 
  };

  const upload = () => {
    if (pdf === null) {
      notifyError('File not uploaded due to some Error'); 
    } else {
      alert("Kindly Wait For The Upload U will Get Notification After The PDF Has Been Uploaded")
      const pdfRef = ref(storage, `Pdf/${pdf.name}`);
      uploadBytes(pdfRef, pdf).then(() => {
        notifySuccess('File Uploaded in Database'); 
      });
    }
  };

  return (
    <div className="file-upload-container">
      <h2>Upload The PDFs For The Class Here</h2>
      <label htmlFor="file-input" className="custom-file-upload">
        Choose File
        <input
          id="file-input"
          type="file"
          onChange={(e) => {
            setPdf(e.target.files[0]);
          }}
        />
      </label>
      <button onClick={upload}>Upload File</button>
    </div>
  );
}

export default FileUpload;
