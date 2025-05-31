import * as React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className='bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link
            href='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Flashcards
            </span>
          </Link>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <Link
              href={'./upload'}
              className='text-white mx-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Import
            </Link>
            <Link
              href={'./login'}
              className='text-white mx-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
