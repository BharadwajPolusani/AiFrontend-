import React from 'react';
import { useState } from "react";
import './../App.css';
import { BrowserRouter, useNavigate, Link, Router, Route, Routes} from "react-router-dom";
import '../../src/Components/Homepage.css';
import { useHistory } from 'react-router-dom';

// const HomePage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const navigate = useNavigate();

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
  
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);
  
//       fetch('http://127.0.0.1:5000/', {
//         method: 'POST',
//         body: formData,
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('File uploaded successfully:', data);
//           navigate('/Ask'); // Redirect to the "/Ask" route after successful upload
//         })
//         .catch((error) => {
//           console.error('Error uploading file:', error);
//         });
//     } else {
//       console.log('No file selected.');
//     }
//   };
  

//   return (
//     <div>
//       <h1>Upload a Document</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default HomePage;


const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (selectedFile) {
      const formData = new FormData();
      formData.append('pdf', selectedFile); // Use 'pdf' as the key for file upload

      fetch('http://127.0.0.1:5000/', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          console.log('File uploaded successfully:', data);
          navigate('/Ask'); // Redirect to the "/Ask" route after successful upload
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div>
      <h1>Upload a Document</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HomePage;