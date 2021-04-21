import { createRef, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const contact = () => {
  let captcha;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const resetCaptcha = () => {
    captcha.reset;
  };

  return (
    <div className='flex justify-center'>
      <form className='w-full max-w-lg p-4 ml-8' onSubmit={sendEmail}>
        <div></div>
        <div className='flex flex-wrap mb-6 -mx-3'>
          <div className='w-full px-3 mb-6 md:w-1/2 md:mb-0'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide uppercase text-azure-200'
              htmlFor='grid-first-name'
            >
              First Name
            </label>
            <input
              className='block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border rounded appearance-none border-azure-500 text-azure-200 focus:outline-none focus:bg-white'
              name='firstName'
              id='grid-first-name'
              type='text'
              placeholder='First Name'
            />
            {/* <p className='text-xs italic text-red-500'>
              Please fill out this field.
            </p> */}
          </div>
          <div className='w-full px-3 md:w-1/2'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide uppercase text-azure-200'
              htmlFor='grid-last-name'
            >
              Last Name
            </label>
            <input
              className='block w-full px-4 py-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none text-azure-200 focus:outline-none focus:bg-white focus:border-gray-500'
              name='lastName'
              id='grid-last-name'
              type='text'
              placeholder='Last Name'
            />
          </div>
        </div>
        <div className='flex flex-wrap mb-6 -mx-3'>
          <div className='w-full px-3'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide uppercase text-azure-200'
              htmlFor='grid-password'
            >
              E-mail
            </label>
            <input
              className='block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none text-azure-200 focus:outline-none focus:bg-white focus:border-gray-500'
              name='email'
              id='email'
              type='email'
            />
            <p className='text-xs italic text-gray-600'></p>
          </div>
        </div>
        <div className='flex flex-wrap mb-6 -mx-3'>
          <div className='w-full px-3'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide uppercase text-azure-200'
              htmlFor='grid-password'
            >
              Message
            </label>
            <textarea
              className='block w-full h-48 px-4 py-3 mb-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none resize-none text-azure-200 no-resize focus:outline-none focus:bg-white focus:border-gray-500'
              id='message'
              name='message'
            ></textarea>
            <ReCAPTCHA
              // ref={e => (this.captcha = e)}
              render='explicit'
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={sendEmail}
            />
            <p className='text-xs italic text-gray-600'></p>
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'>
            <button
              className='px-4 py-2 font-bold text-white bg-gradient-to-tl from-blue-100 via-blue-300 to-blue-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none'
              type='submit'
            >
              Send
            </button>
          </div>
          <div className='md:w-2/3'></div>
        </div>
      </form>
    </div>
  );
};

export default contact;
