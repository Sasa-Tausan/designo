import { useContext } from "react";
import MyContext from "./MyContext";

const Project = () => {
  const { selectedProjectPage, handleSelectedProjectPage } =
    useContext(MyContext);

  console.log(selectedProjectPage);
  const { name, text, bgClass } = selectedProjectPage;
  return (
    <main className="container page-wrapper ">
      <section
        className={`project-hero-section bg-project-hero-section ${bgClass} d-flex align-center justify-center br-15 `}
      >
        <div className="project-hero-article d-flex flex-col align-center">
          <h1 className="heading-one text-clr-white medium capitalize ">
            {name}
          </h1>
          <p className="body-text text-clr-white">{text}</p>
        </div>
      </section>
    </main>
  );
};

export default Project;
