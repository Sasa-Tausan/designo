import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { locationSectionData } from '../assets/data';

const Locations = () => {
  const location = useLocation();

  const { locationId } = location.state || {};

  useEffect(() => {
    if (locationId) {
      const section = document.getElementById(locationId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [locationId]);
  return (
    <main className='container'>
      {locationSectionData.map((item, index) => {
        const { country, office, address, city, phone, mail, position } = item;
        return (
          <section
            key={index}
            className={`locations-section d-flex ${
              index === 1 ? 'reverse' : ''
            }`}
            id={country}
          >
            <div className='office-info d-flex flex-col br-15'>
              <h2 className='heading-two text-clr-peach medium capitalize'>
                {country}
              </h2>
              <div className='address-info d-flex align-center'>
                <div className='address body-text text-clr-dark-grey'>
                  <p className='bold'>{office}</p>
                  <p>{address}</p>
                  <p>{city}</p>
                </div>
                <div className='contact-info body-text text-clr-dark-grey'>
                  <p className='bold'>Contact</p>
                  <a href='tel:#' className='body-text text-clr-dark-grey'>
                    T: {phone}
                  </a>
                  <br />
                  <a href='mailto:#' className='body-text text-clr-dark-grey'>
                    P: {mail}
                  </a>
                </div>
              </div>
            </div>

            <MapContainer
              center={position}
              zoom={13}
              className='map-container'
              zoomControl={false}
            >
              <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}></Marker>
            </MapContainer>
          </section>
        );
      })}
    </main>
  );
};

export default Locations;
