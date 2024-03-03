import React from 'react';
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
        <button type='button' onClick={() => window.open("#")} className='black_btn' 
        >
          API Document
        </button>
      </nav>
      <h1 className='head_text'>
      Condense books into concise<br className='max-md:hidden' />
        <span className='orange_gradient'>summaries briefly</span>
      </h1>

      <h2 className='desc'>
       Streamline your reading with Summarize—an API-powered tool that converts lengthy articles/books into clear, concise summaries in any language for efficiency. 
      </h2>
    </header>
  )
}

export default Hero