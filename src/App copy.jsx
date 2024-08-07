import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [error, setError] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const url = URL.createObjectURL(file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'image/*',
        'Access-Control-Allow-Origin': '*'
      },
    };
    axios.post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFile(response.data.file);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        setError(error);
      });
  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" accept="image/*" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        {uploadedFile && <img src={uploadedFile} alt="Uploaded content"/>}
        {error && <p>Error uploading file: {error.message}</p>}
    </div>
  );
}

export default App;
