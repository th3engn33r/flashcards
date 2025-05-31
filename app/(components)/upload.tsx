'use client';
import { redirect } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };
  return (
    <>
      <div className='flex bg-gray-400 rounded-2xl border-4 border-gray-700 text-white text-center items-center justify-center h-[50vh]'>
        <div className='flex flex-col rounded border-dashed border-4 text-white border-white w-80 h-60 text-center justify-center'>
          <input
            className=' h-[20vh] text-gray-400 '
            type='file'
            onChange={handleUpload}
          />
          <p className=''>click to upload file</p>
        </div>
      </div>
      {file && (
        <div className='text-center my-3'>
          <p>File selected: {file.name}</p>
        </div>
      )}
    </>
  );
};

export default Upload;
