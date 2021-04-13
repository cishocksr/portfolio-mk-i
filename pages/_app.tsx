import Navbar from '../components/navbar.component';
import Sidebar from '../components/sidbar.component';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 lg:mb-0 md:mb-16 my-14 lg:px-36 sm:px-20 md:px-32'>
      <div className='h-full col-span-12 p-4 text-base text-center bg-snow lg:col-span-3 rounded-2xl'>
        <Sidebar />
      </div>
      <div className='flex flex-col col-span-12 bg-snow lg:col-span-9 rounded-2xl'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
