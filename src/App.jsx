import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Company, Contact, Header, Home, Locations, Project } from "./Index";
import MyContext from "./components/MyContext.jsx";
import { usePageData } from "./components/usePageData.jsx";
import { projectPageData } from "./assets/data.js";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [selectedProjectPage, handleSelectedProjectPage] =
    usePageData(projectPageData);
  return (
    <MyContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        selectedProjectPage,
        handleSelectedProjectPage,
      }}
    >
      <div className="page-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
};

export default App;
