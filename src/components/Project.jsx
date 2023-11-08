import { useContext } from "react";
import MyContext from "./MyContext";

const Project = () => {
  const { selectedProjectPage, handleSelectedProjectPage } =
    useContext(MyContext);

  console.log(selectedProjectPage);

  return <div>Project</div>;
};

export default Project;
