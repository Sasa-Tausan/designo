import { useNavigate } from 'react-router-dom';
import { locationSectionData } from '../assets/data';
import { useContext } from 'react';
import MyContext from './MyContext';

const LocationSection = () => {
  const navigate = useNavigate();
  const { path } = useContext(MyContext);
  return (
    <section
      className={`location-section d-flex ${
        path === '/contact' ? 'contact' : ''
      }`}
    >
      {locationSectionData.map((item, index) => {
        const { country, image } = item;
        return (
          <div key={index} className='relative location-card d-flex flex-col'>
            <div className='location-image d-flex align-center justify-center'>
              <img src={image} alt='' />
            </div>

            <div className='country-content d-flex flex-col align-center '>
              <h3 className='heading-three text-dark ls-5 medium uppercase'>
                {country}
              </h3>

              <a
                onClick={() => {
                  navigate('/locations', { state: { locationId: country } });
                }}
                className='btn btn-light medium uppercase'
              >
                see location
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LocationSection;
