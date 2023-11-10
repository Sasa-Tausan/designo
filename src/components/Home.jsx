import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { homeHeroImgDesktop, iconRightArrow, leafPattern } from '../images';
import MyContext from './MyContext';
import { aboutUsData, projectDataList } from '../assets/data';

const Home = () => {
  const { isMobileMenuOpen, handleSelectedProjectPage } = useContext(MyContext);

  return (
    <main className='container page-wrapper'>
      <section
        className={`home-hero-section d-flex  space-between br-15 ${
          isMobileMenuOpen ? 'active' : ''
        }`}
      >
        <div className='article-wrapper d-flex flex-col '>
          <article className='hero-article d-flex flex-col '>
            <h1 className='heading-one text-clr-white medium '>
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className='body-text hero-home-text text-clr-white '>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
          </article>
          <Link
            to='/about'
            className='btn-on-dark medium text-clr-dark  uppercase'
          >
            Learn More
          </Link>
        </div>
        <img src={homeHeroImgDesktop} alt='' className='hero-image' />
      </section>
      <section className='project-section '>
        {projectDataList.map((item, index) => {
          const {
            name,
            images: { desktop, tablet, mobile },
          } = item;
          return (
            <Link
              to='/project'
              key={index}
              className='project-link relative d-flex align-center justify-center'
              onClick={() => handleSelectedProjectPage(name)}
            >
              <picture>
                <source media='(max-width: 375px)' srcSet={mobile} />
                <source media='(max-width:768px )' srcSet={tablet} />
                <img src={desktop} alt='' className='br-15' />
              </picture>
              <div className=' absolute d-flex flex-col align-center'>
                <h2 className='heading-two text-clr-white medium uppercase'>
                  {name}
                </h2>
                <div className='d-flex align-center space-between gap-20'>
                  <p className='fs-15 text-clr-white medium uppercase ls-5'>
                    view projects
                  </p>
                  <img src={iconRightArrow} alt='' />
                </div>
              </div>
            </Link>
          );
        })}
      </section>
      <section className='relative about-us-section d-flex '>
        <img src={leafPattern} alt='' className='leaf-pattern' />
        {aboutUsData.map((item, index) => {
          const { title, text, icon } = item;
          return (
            <div
              key={index}
              className='about-us-card d-flex flex-col align-center'
            >
              <img src={icon} alt='' />
              <div className='about-us-card-content d-flex flex-col align-center'>
                <h3 className='heading-three text-clr-dark-grey  medium ls-5 uppercase'>
                  {title}
                </h3>
                <p className='body-text text-clr-dark-grey'>{text}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
