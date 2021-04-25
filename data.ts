import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiFillEdit, AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si';
import { GiMeditation } from 'react-icons/gi';
import { iProject, Service, Skill } from './helpers/types';

import { BsCircleFill } from 'react-icons/bs';

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build complete SPA, that is scalable and dynamic with <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'I enjoy to use and build relational and nosql databases as well as servers, and api using <b>Express </b> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can build and implement robust  REST API using <b>Node.JS</b> ',
  },
  {
    Icon: SiGooglescholar,
    title: 'Lifelong Learner',
    about:
      'Always striving to grow as an engineer with <b>Leet Code</b>, and other available tools. ',
  },
  {
    Icon: AiFillEdit,
    title: 'Writer',
    about:
      'Enjoy writing about my journey as a engineer. Always looking to help others grow.',
  },
  {
    Icon: GiMeditation,
    title: 'Human Being',
    about:
      'I am committed to being the best human being that I can be, while helping anyone else to reach the same!',
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'Java Script',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'Node JS',
    level: '65',
  },
  {
    Icon: BsCircleFill,
    name: 'Typescript',
    level: '55',
  },
  {
    Icon: BsCircleFill,
    name: 'TailwindCss',
    level: '65',
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Git',
    level: '85',
  },
  {
    Icon: BsCircleFill,
    name: 'Visual Studio Code',
    level: '90',
  },
  {
    Icon: BsCircleFill,
    name: 'Zoom',
    level: '75',
  },
  {
    Icon: BsCircleFill,
    name: 'Slack',
    level: '80',
  },
];

export const projects: iProject[] = [
  {
    id: 1,
    name: 'COVID Tracker',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/covid-screenshot.png',
    deployed_url: 'https://covid-19-tracker-dd484.web.app/',
    github_url: 'https://github.com/cishocksr/covid-19-tracker',
    category: ['react'],
    tech_category: ['React', 'Chart.js', 'Material UI'],
  },
  {
    id: 2,
    name: 'Game of Life',
    image_path: '/images/gameOfLife.png',
    deployed_url: 'https://nifty-goodall-08e4f4.netlify.app/',
    github_url: 'https://github.com/cishocksr/conways-game-of-life',
    category: ['react'],
    description:
      'A cellular automation created by British Mathematician John Horton Conway',
    tech_category: ['React'],
  },
];
