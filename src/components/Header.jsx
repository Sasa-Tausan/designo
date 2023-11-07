import { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MyContext from './MyContext';
import { menuList } from '../assets/data';
import { logoDark, iconClose, iconHamburger } from '../images';

const Header = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MyContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='relative container header d-flex align-center space-between'>
      <Link to='/'>
        <img src={logoDark} alt='' className='logo' />
      </Link>

      <nav className='main-nav'>
        {menuList.map((item, index) => {
          const { path, name } = item;
          return (
            <NavLink
              to={path}
              key={index}
              className='nav-item text-clr-grey ls-2 uppercase'
              style={{
                marginRight: `${index !== menuList.length - 1 ? '42px' : 0}`,
              }}
            >
              {name}
            </NavLink>
          );
        })}
      </nav>
      <img
        src={isMobileMenuOpen ? iconClose : iconHamburger}
        alt=''
        className='menu-icon'
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className='mobile-nav'
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1 }}
            exit={{ scale: 0 }}
          >
            {menuList.map((item, index) => {
              const { path, name } = item;
              return (
                <NavLink
                  to={path}
                  key={index}
                  className='mobile-item text-clr-white ls-2 uppercase'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </NavLink>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
