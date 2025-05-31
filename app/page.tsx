import * as React from 'react';
import Upload from './(components)/upload';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='bg-blue-100 rounded border-2 border-blue-300 min-h-[40vh] flex justify-center items-center text-center'>
        <h1 className='text-black font-bold text-6xl'>
          Try the new Flashcards app
        </h1>
        <div className='flex'>
          <Image
            src='/purple-flashcards.jpg'
            alt='banner image containing flashcards'
            width={1000}
            height={1000}
          ></Image>
        </div>
      </div>
      <Upload />
      <div className='bg-black rounded border-2 border-black min-h-[40vh] flex justify-start text-center'>
        <Image
          src='/afeature.jpg'
          alt='banner image containing flashcards'
          width={500}
          height={500}
        ></Image>
      </div>
    </>
  );
}
