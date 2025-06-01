import * as React from 'react';
import Link from 'next/link';
import Upload from '../(components)/upload';

const loggedin = true;

const UploadPage = () => {
  return (
    <div className='flex flex-col min-h-[60vh] justify-center items-center'>
      {loggedin && (
        <div>
          <Upload />
        </div>
      )}
      {!loggedin && (
        <div className='flex flex-col items-center'>
          <p>Please login to continue</p>
          <Link
            href={'./login'}
            className='mt-3 text-white mx-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
