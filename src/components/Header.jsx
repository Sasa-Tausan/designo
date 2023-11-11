import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MyContext from './MyContext';
import { menuList } from '../assets/data';
import { logoDark, iconClose, iconHamburger } from '../images';

const Header = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MyContext);

  return (
    <header className='relative container header d-flex align-center space-between'>
      <Link to='/'>
        <img
          src={logoDark}
          alt=''
          className='logo'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </Link>

      <nav className='main-nav d-flex align-center'>
        {menuList.map((item, index) => {
          const { path, name } = item;
          return (
            <NavLink
              to={path}
              key={index}
              className='nav-item text-grey ls-2 uppercase'
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
            transition={{ duration: 0.2 }}
            exit={{ scale: 0 }}
          >
            {menuList.map((item, index) => {
              const { path, name } = item;
              return (
                <NavLink
                  to={path}
                  key={index}
                  className='mobile-item text-light ls-2 uppercase'
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
