import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span className='hover:text-indigo' onClick={() => setActiveItem(name)}>
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/blog') setActiveItem('Blog');
    if (pathname === '/contact') setActiveItem('Contact');
  }, []);

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold border-b-4 text-indigo border-indigo md:2xl'>
        {activeItem}
      </span>
      <div className='flex space-x-5 text-lg '>
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='About'
          route='/'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Projects'
          route='/projects'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Contact'
          route='/contact'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Blog'
          route='/blog'
        />
      </div>
    </div>
  );
};

export default Navbar;
