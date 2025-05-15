'use client';
import { useState } from 'react';

const Card = () => {
  const textOne = 'Dutch';
  const textTwo = 'English';

  const [word, setWord] = useState(textOne);

  const handleClick = () => {
    word === textOne ? setWord(textTwo) : '';
    word === textTwo ? setWord(textOne) : '';
  };

  return (
    <>
      <div
        className='mx-auto p-8 bg-gray-700 flex items-center justify-center rounded-3xl w-80'
        onClick={handleClick}
      >
        <h3 className='text-5xl text-center'>{`${word}`}</h3>
      </div>
    </>
  );
};

export default Card;
