import { aboutImgDesktop } from "../images";

const Company = () => {
  return (
    <main className="container page-wrapper">
      <section className="company-hero-section d-flex br-15">
        <article className="article-content d-flex flex-col">
          <h1 className="heading-one text-clr-white medium capitalize">
            about us
          </h1>
          <p className="company-hero-article-text body-text text-clr-white">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We&apos;ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We&apos;re always looking forward to creating brands,
            products, and digital experiences that connect with our
            clients&apos; audiences.
          </p>
        </article>
        <picture>
          <img src={aboutImgDesktop} alt="" className="company-hero-img" />
        </picture>
      </section>
    </main>
  );
};

export default Company;
