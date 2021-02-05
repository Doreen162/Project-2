import React from 'react';


const TickIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
    <g fill="none" fillRule="evenodd">
      <circle cx="22" cy="22" r="22" fill="#C4F0FF" fillRule="nonzero"></circle>
      <polyline stroke="#43458B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" points="14 23.504 19.34 29 31 17"></polyline>
    </g>
  </svg>
);


export default ({ email }) => (
  <div className='suc__container'>
    <div className='success'>
      <div className='suc__copy'>
        <div className='suc__icon'><TickIcon /></div>
        <h1 className='suc__headline'>Thank you!</h1>
        <h2 className='suc__subhead'>We will get back to you as soon as possible at {email}</h2>
      </div>
    </div>
  </div>
);