import { useState } from "react";

import Dropdown from "../dropdown/Dropdown";

import "./Filters.css";

const Filters = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="flex-between">
      <div className="filtersText-wrapper">
        <h2>Reports</h2>
        <h6>Easily generate a report of your transactions</h6>
      </div>
      <div className="filters-wrapper">
        <Dropdown
          title="All Projects"
          options={projects}
          activeItem={activeProject}
          setActiveItem={setActiveProject}
        />
      </div>
    </div>
  );
};

export default Filters;
