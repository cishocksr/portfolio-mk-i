import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { GrCloudDownload } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';

const Sidebar = () => {
  return (
    <div>
      <img
        src='/images/cishocksr.jpg'
        alt='avatar'
        className='w-32 h-32 mx-auto rounded-full'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-romanesco'>
        <span className='text-indigo'>Chris </span>Shockley
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full '>
        Software Engineer
      </p>
      <a
        href='#'
        download='#'
        className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer'
      >
        <GrCloudDownload className='w-5 h-5' />
        <span>Download Resume</span>
      </a>
      {/* Social Icon */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-indigo m:w-full'>
        <a
          href='https://github.com/cishocksr'
          className='w-8 h-8 cursor-pointer'
          target='_blank'
        >
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/christopherishockley/'
          className='w-8 h-8 cursor-pointer'
          target='_blank'
        >
          <AiFillLinkedin />
        </a>
        <a
          href='https://twitter.com/iLogiXpozed'
          className='w-8 h-8 cursor-pointer'
          target='_blank'
        >
          <AiFillTwitterSquare />
        </a>
      </div>
      {/* Address */}
      <div className='my-5 py-4 bg-gray-200 style={{marginLeft:"-1rem", marginRight: "-1rem" }}'>
        <div className='flex items-center justify-center'>
          <GoLocation className='' />
          <span>Cleveland, OH</span>
        </div>
        <p className='my-2'>cishockleysr@gmail.com</p>
      </div>
      {/* Email Button */}
      <button
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-gray-200 via-indigo-300 to-blue-400 focus:outline-none'
        onClick={() => window.open('mailto: cishockleysr@gmail.com')}
      >
        Email Me
      </button>
      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-gray-200 via-indigo-300 to-blue-400'>
        Toggle Me
      </button>
    </div>
  );
};

export default Sidebar;
