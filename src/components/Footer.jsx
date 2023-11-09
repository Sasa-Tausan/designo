import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MyContext from './MyContext';
import SocialLinks from './SocialLinks';
import { logoLight } from '../images';
import { menuList } from '../assets/data';

const Footer = () => {
  const { path } = useContext(MyContext);
  return (
    <footer className='bg-dark d-flex'>
      <div className='container d-flex flex-col align-center'>
        {/* {path !== "/contact" && (
          <div className="footer-top d-flex align-center space-between br-15">
            <div className="footer-header-content d-flex flex-col">
              <h2 className="heading-two medium text-clr-white">
                Let&apos;s talk about <br /> your project
              </h2>
              <p className="body-text footer-header-content-text text-clr-white">
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-on-dark medium text-clr-dark br-15 uppercase"
            >
              get in touch
            </Link>
          </div>
        )} */}

        <div className='footer-bottom d-flex flex-col'>
          <div className='d-flex align-center space-between'>
            <Link to='/'>
              <img src={logoLight} alt='' className='logo' />
            </Link>
            <hr className='mobile-divider' />
            <nav className='footer-nav d-flex align-center'>
              {menuList.map((item, index) => {
                const { path, name } = item;
                return (
                  <NavLink
                    key={index}
                    to={path}
                    className='nav-item text-clr-white ls-2 uppercase '
                  >
                    {name}
                  </NavLink>
                );
              })}
            </nav>
          </div>
          <hr className='divider' />
          <div className=' d-flex align-center space-between'>
            <div className='address-content d-flex align-center'>
              <div className='address d-flex flex-col body-text text-clr-white opacity-50'>
                <p>Designo Central Office </p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J</p>
              </div>
              <div className='address d-flex flex-col body-text text-clr-white opacity-50'>
                <p>Designo Central Office </p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J</p>
              </div>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
