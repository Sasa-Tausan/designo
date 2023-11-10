import {
  aboutImgDesktop,
  aboutImgMobile,
  aboutImgTablet,
  dealImgDesktop,
  dealImgMobile,
  dealImgTablet,
  leafPattern,
  talentImgDesktop,
  talentImgMobile,
  talentImgTablet,
} from '../images';
import LocationSection from './LocationSection';

const Company = () => {
  return (
    <main className='relative container company-wrapper'>
      <img src={leafPattern} alt='' className='company-leaf-image' />
      <img src={leafPattern} alt='' className='company-leaf-image-two' />
      <section className='company-hero-section relative '>
        <article className='article-content d-flex flex-col'>
          <h1 className='heading-one text-clr-white medium capitalize'>
            about us
          </h1>
          <p className='company-hero-article-text body-text text-clr-white'>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We&apos;ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We&apos;re always looking forward to creating brands,
            products, and digital experiences that connect with our
            clients&apos; audiences.
          </p>
        </article>
        <picture>
          <source media='(max-width: 375px)' srcSet={aboutImgMobile} />
          <source media='(max-width:768px )' srcSet={aboutImgTablet} />
          <img src={aboutImgDesktop} alt='' className='company-hero-img' />
        </picture>
      </section>
      <section className='talent-section '>
        <picture>
          <source media='(max-width:375px )' srcSet={talentImgMobile} />
          <source media='(max-width:768px )' srcSet={talentImgTablet} />
          <img src={talentImgDesktop} alt='' className='talent-img' />
        </picture>
        <article className='talent-article d-flex flex-col justify-center'>
          <h2 className='heading-two medium text-clr-peach capitalize'>
            World-class talent
          </h2>
          <p className='body-text text-clr-dark-grey'>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className='body-text text-clr-dark-grey'>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand&apos;s story and mission.
          </p>
        </article>
      </section>
      <LocationSection />
      <section className='deal-section'>
        <article className='deal-article d-flex flex-col '>
          <h2 className='heading-two text-clr-peach medium '>The real deal</h2>
          <p className='body-text text-clr-dark-grey'>
            As strategic partners in our clients businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className='body-text text-clr-dark-grey'>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </article>
        <picture>
          <source media='(max-width:375px )' srcSet={dealImgMobile} />
          <source media='(max-width:768px )' srcSet={dealImgTablet} />
          <img src={dealImgDesktop} alt='' className='deal-img' />
        </picture>
      </section>
    </main>
  );
};

export default Company;
