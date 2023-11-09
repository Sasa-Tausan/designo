import { useContext } from 'react';
import MyContext from './MyContext';

const Project = () => {
  const { selectedProjectPage, handleSelectedProjectPage } =
    useContext(MyContext);

  console.log(selectedProjectPage);
  const { name, text, bgClass, projects } = selectedProjectPage;
  return (
    <main className='container page-wrapper '>
      <section
        className={`project-hero-section bg-project-hero-section ${bgClass} d-flex align-center justify-center  `}
      >
        <div className='project-hero-article d-flex flex-col align-center'>
          <h1 className='heading-one text-clr-white medium capitalize '>
            {name}
          </h1>
          <p className='body-text text-clr-white'>{text}</p>
        </div>
      </section>
      <section className='project-grid'>
        {projects.map((item, index) => {
          const { img, title, cardText } = item;
          return (
            <a href='#' key={index} className='card '>
              <img src={img} alt='' className='card-image' />
              <div className='card-content'>
                <h3 className='heading-three text-clr-peach medium ls-5 uppercase'>
                  {title}
                </h3>
                <p className='body-text text-clr-dark-grey'>{cardText}</p>
              </div>
            </a>
          );
        })}
      </section>
    </main>
  );
};

export default Project;
