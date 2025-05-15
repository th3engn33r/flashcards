import * as React from 'react';
import Nav from './(components)/nav';
import Card from './(components)/card';

export default function Home() {
  return (
    <>
      <div className='min-h-[70vh] flex m-2 p-4'>
        <Card />
      </div>
    </>
  );
}
