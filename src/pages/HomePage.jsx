import React from 'react';
import {GiWorld} from 'react-icons/gi';

const HomePage = () => {
  return (
    <div className='bg-slate-800 flex flex-col items-center justify-center h-screen'>
      <h1 className='text-slate-500 text-6xl font-bold'>Hello World!</h1>
      <GiWorld className='pt-10 pb-5 text-slate-500 text-9xl' />
      <h2 className='text-slate-500 text-xl font-bold'>...from src/pages/HomePage.jsx </h2>
      <h2 className='text-slate-500 text-xl font-bold'>...via src/layouts/MainLayout.jsx</h2>
    </div>
  );
};

export default HomePage;
