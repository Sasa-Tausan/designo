import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from './MyContext';
import { iconRightArrow } from '../images';

const Project = () => {
  const { selectedProjectPage, handleSelectedProjectPage } =
    useContext(MyContext);

  const { name, text, bgClass, projects, design } = selectedProjectPage;
  return (
    <main className='container page-wrapper '>
      <section
        className={`project-hero-section bg-project-hero-section ${bgClass} d-flex align-center justify-center  `}
      >
        <div className='project-hero-article d-flex flex-col align-center'>
          <h1 className='heading heading-one text-light medium capitalize '>
            {name}
          </h1>
          <p className='body-text text-light'>{text}</p>
        </div>
      </section>
      <section className='project-grid'>
        {projects.map((item, index) => {
          const { img, title, cardText } = item;
          return (
            <a href='#' key={index} className='card '>
              <img src={img} alt='' className='card-image' />
              <div className='card-content'>
                <h3 className='heading-three text-peach medium ls-5 uppercase'>
                  {title}
                </h3>
                <p className='body-text text-dark'>{cardText}</p>
              </div>
            </a>
          );
        })}
      </section>
      <section className='project-page-section d-flex align-center space-between'>
        {design.map((item, index) => {
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
                <h2 className='heading heading-two text-light medium ls-2 uppercase'>
                  {name}
                </h2>
                <div className='d-flex align-center space-between gap-20'>
                  <p className='fs-15 text-light medium uppercase ls-5'>
                    view projects
                  </p>
                  <img src={iconRightArrow} alt='' />
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Project;
