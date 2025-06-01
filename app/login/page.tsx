'use client';
import Form from 'next/form';
import { useActionState } from 'react';
import action from './action';

const Login = () => {
  const [state, formAction, isPending] = useActionState(action, undefined);
  return (
    <div className='flex flex-col rounded-xl border-2 border-gray-100 p-4 justify-center w-[30vw] items-center mx-auto my-20 py-30'>
      {state?.status && <p>{state?.message}</p>}
      <Form action={formAction}>
        <label htmlFor='email' className='w-[20vw] flex p-2'>
          Email
        </label>
        <input
          name='email'
          type='email'
          required
          className='w-[20vw] flex border-0 rounded-2xl bg-white p-2 m-2 text-black'
        ></input>
        <label htmlFor='password' className='w-[20vw] flex p-2'>
          Password
        </label>
        <input
          type='password'
          required
          // pattern='[@#$%^&*(_+-`0-9a-zA-Z]{8,}'
          name='password'
          className='w-[20vw] flex border-0 rounded-2xl bg-white p-2 m-2 text-black'
        ></input>
        <button className='flex text-white  p-2 mx-2 my-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          {isPending ? 'Submitting ....' : 'Submit'}
        </button>
      </Form>
    </div>
  );
};

export default Login;
