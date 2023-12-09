'use client'

import React, {useState} from 'react';
import Axios from "axios";




function Upload({ upimgs2 , setupimgs2 }) {
  const [uploadFile, setUploadFile] = useState("");
  const [cloudinaryImage, setCloudinaryImage] = useState("");
  const [upimgs , setupimgs] =useState([]);
  

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData ();
    formData.append("file", uploadFile);
    formData.append("upload_preset", "skiacoffee");

    Axios.post(
     "https://api.cloudinary.com/v1_1/dxbzcfalw/image/upload",
     formData
   )
    .then((response) => {
      console.log(response);
      setCloudinaryImage(response.data.secure_url);
      setupimgs(upimgs => [...upimgs, response.data.secure_url]);
      setupimgs2(upimgs2 => [...upimgs2, (response.data.secure_url.slice(50 , response.data.secure_url.length ))]);

      
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const trimurl = (e)=>{
    e.preventDefault();
    // upimgs.forEach((e)=>(
    //     setupimgs(e => [...e, e.slice(0,50)])
    // ))
    console.log(upimgs2);
  }

  return ( 
    <div> 
         
          <div class='m-6 p-4 bg-gray-100 rounded-xl '> 
              <h3 class='block mb-2 text-sm font-medium text-gray-900'> Upload Images</h3>
              <div class='m-4 p-2 border-lg border-orange-950 bg-white  flex justify-center'>
                <input type="file" 
                className='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50'
                onChange ={(event) => {setUploadFile(event.target.files[0]);}} 
              />
                 <button class='ml-2 font-medium rounded-full text-sm px-2.5 py-0 text-center me-2 mb-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300' onClick = {handleUpload}> Upload </button>

              </div>
             {/* <button class='bg-purple-700 p-2 text-white rounded-xl' onClick = {trimurl}> LOG URLS</button> */}


             <div className="right-side">
          <h3 class='block mb-2 text-sm font-sm text-gray-900 rounded-xl '>Uploaded Images</h3>
          <div class='flex flex-row'>
          { upimgs.map((i , index)=>(
                <div class='p-2 w-1/4 h-1/4 shadow-xl shadow-gray-300' key={index}>{i && ( <img src={i} /> )}</div>
          ))
          
            }
            </div>
        </div>
            </div> 
         
        
    </div>
  );
} 
export default Upload;