import { services } from '../data';
import ServiceCard from '../components/serviceCard.component';

const index = () => {
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h6 className='my-3 text-base font-medium'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam
        mi a tortor fringilla mattis. Nam feugiat nulla vel libero tempus
        ultrices. Nullam pellentesque, orci at volutpat ornare, enim ante
        sollicitudin turpis, in elementum turpis diam ac massa. Nullam mi orci,
        congue et diam non, malesuada malesuada risus. Suspendisse potenti.
        Nulla congue fringilla elit, et pharetra ipsum consectetur sed.
      </h6>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className='my-3 text-xl font-semibold tracking-wide'>
          What I am doing
        </h4>

        <div className='grid gap-6 my-3 md:grid-cols-2'>
          {services.map((service) => (
            <div
              className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1'
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
