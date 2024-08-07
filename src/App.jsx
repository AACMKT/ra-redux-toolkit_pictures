import React from 'react'
import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { appendImgToList } from './redux/Slices/imagesSlice';

function App() {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('choose the file');
  const fileInput = React.createRef();

  const dispatch = useDispatch();
  const imagesList = useSelector(state => state.images.imgList);

  function handleChange() {
    let currentFlie = fileInput.current.files[0];
    if (!currentFlie) return;
    setFile(currentFlie);
    setFileName(String(`chosen file: ${currentFlie.name}`));
    console.log(currentFlie.name)
  }


  function handleSubmit(event) {
    event.preventDefault();
    setFileName('choose the file');
    if (!file) return;
    dispatch(appendImgToList(URL.createObjectURL(file)));
    setFile(null);
  }

  const handleEvent = (e) => {
    e.preventDefault();
    let event = new MouseEvent("click");
    fileInput.current.dispatchEvent(event);
    console.log('here')
  }

  return (
    <div>
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          
          <h3>React Pictures Uploader</h3>
          <div className="controls">
            <div className='file-loader'>
              <input type="file" className="file-input" accept="image/*" ref={fileInput} onChange={handleChange}/>
              <span className='overlap' onClick={(e) => handleEvent(e)}>Choose Image</span>
            </div>
              <button type="submit" className="button">Upload</button>
            </div>
          <span className='helper'>{fileName && fileName}</span>
        </form>
        <div className='image-container'>
          {imagesList && imagesList.map((item, index) => <img className="image" src={item} key={index} style={{width: '200px', height: '200px', objectFit: 'cover'}} alt="Uploaded content"/>) }
        </div>
    </div>
  );
}

export default App;
