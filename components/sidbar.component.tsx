import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { GrCloudDownload } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <>
      <Image
        src='/images/cishocksr.jpg'
        alt='avatar'
        className='mx-auto border rounded-full '
        height='128px'
        width='128px'
        layout='intrinsic'
        quality='100'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-indigo '>Chris</span> Shockley
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>
        Software Engineer
      </p>
      {/* Resume */}
      <a
        href='#'
        download='#'
        className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500'
      >
        <GrCloudDownload className='w-6 h-6' />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-indigo md:w-full '>
        <a href='https://github.com/cishocksr' target='_blank'>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a
          href='https://www.linkedin.com/in/christopherishockley/'
          target='_blank'
        >
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://twitter.com/iLogiXpozed'>
          <AiFillTwitterSquare
            className='w-8 h-8 cursor-pointer'
            target='_blank'
          />
        </a>{' '}
      </div>

      {/* Contacts */}
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center'>
          <GoLocation className='mr-2' /> <span>Cleveland, OH </span>
        </div>
        <p className='my-2 '> cishockleysr@gmail.com </p>
      </div>

      {/* Email Button */}

      <button
        className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-ocean via-aqua to-bluehover:scale-105 focus:outline-none'
        onClick={() => window.open('mailto:code.cishockleysr@gmail.com')}
      >
        Email me
      </button>
      <button
        // onClick={changeTheme}
        className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-ocean via-aqua to-blue focus:outline-none hover:scale-105 '
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
