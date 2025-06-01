'use client';
import { redirect, usePathname } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const path = usePathname();
  const redirectedPath: string = path === '/upload' ? '/upload/api' : '/upload';

  return (
    <>
      <div className='flex bg-gray-400 rounded-2xl border-4 border-gray-700 text-white text-center items-center justify-center h-[50vh]'>
        {!file && (
          <div className='flex flex-col rounded border-dashed border-4 text-white border-white w-80 h-60 text-center justify-center'>
            <input
              className=' h-[20vh] text-gray-400 '
              type='file'
              onChange={handleUpload}
            />
            <p className=''>click to upload file</p>
          </div>
        )}
        {file && (
          <div className='text-center my-3'>
            <p className='mb-8'>File selected: {file.name}</p>
            <button
              className='bg-blue-700 mx-2 w-30 h-10 rounded-2xl'
              onClick={() => redirect(redirectedPath)}
            >
              Upload
            </button>
            <button
              className='bg-blue-700 mx-2 w-30 h-10 rounded-2xl'
              onClick={() => setFile(null)}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Upload;
