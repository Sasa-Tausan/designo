import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-dark d-flex'>
      <div className='container d-flex flex-col align-center'>
        <div className='footer-header d-flex align-center space-between br-15'>
          <div className='footer-header-content d-flex flex-col'>
            <h2 className='heading-two medium text-clr-white'>
              Let&apos;s talk about <br /> your project
            </h2>
            <p className='body-text footer-header-content-text text-clr-white'>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Link
            to='/contact'
            className='btn-on-dark medium text-clr-dark br-15 uppercase'
          >
            get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
