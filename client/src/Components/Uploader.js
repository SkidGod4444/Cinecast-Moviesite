import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi';
import { useState } from 'react';
import Loader from './Notifications/LoaderN';
import ImageUploadService from '../Redux/Apis/ImageServices';


function Uploader({setImageUrl}) {
  const [Loading, setLoading] = useState(false);

// upload file handler
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = new FormData();
      file.append('file', acceptedFiles[0]);
      const data  = await ImageUploadService(file, setLoading);
      setImageUrl(data);
    },
    [setImageUrl]
  )




  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(
    {
        multiple: false,
        maxSize: 1048576,
        onDrop,
        accept: 'image/jpeg, image/png, image/jpg',
        
    },
);

  return (
    <div className='w-full text-center flex-colo gap-6'>
      {
        Loading ? (
          <div className='px-6 w-full py-8 border-2 border-border border-dashed bg-dry rounded-md'>
            <Loader/>
            </div>
            )
            : (
              <div 
    {...getRootProps()}
    className='px-6 w-full py-8 border-2 hover:border-subMain  border-border border-dashed bg-main rounded-md cursor-pointer'>
    <input {...getInputProps()} />
    <div className='flex flex-col items-center'>
      <span className='text-subMain text-3xl mb-2'>
        <FiUploadCloud />
      </span>
      <p className='text-sm mt-2'>Drag 'n' drop your image here</p>
      <em className='text-xs text-border'>
        {
          isDragActive 
          ? "Drop the image here" 
          : isDragReject 
          ? "Unsupported file format..." 
          : "Only *.jpeg, *.jpg and *.png images will be accepted"
        }
      
        </em>
    </div>
  </div>
            )}
  
</div>

  )
}

export default Uploader