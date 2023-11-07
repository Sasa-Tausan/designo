import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Company, Contact, Header, Home, Locations, Project } from './Index';
import MyContext from './components/MyContext.jsx';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <MyContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      <div className='page-container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
};

export default App;
