import LoaderWrapper from "../../components/LoaderWrapper/LoaderWrapper";
import Accordion from "../../components/accordion/Accordion";
import Filters from "../../components/filters/Filters";
import Empty from "../../components/empty/Empty";

import useProjects from "./useProjects";

import "./Projects.css";

const Projects = () => {
  const { projects, isLoading, handleChangeActiveProject, activeProjectId } =
    useProjects();

  return (
    <LoaderWrapper isLoading={isLoading}>
      <div className="content-filters">
        <Filters projects={projects} />
      </div>
      <div className="content-body">
        {projects && !!projects.length ? (
          <div className="projects">
            <div className="projects-wrapper">
              <h2>All projects | All gateways</h2>

              {projects.map(({ projectId, name }) => (
                <Accordion
                  name={name}
                  projectId={projectId}
                  key={projectId}
                  setActiveProjectId={handleChangeActiveProject}
                  activeProjectId={activeProjectId}
                />
              ))}

              <div className="projects-total">
                <h3>TOTAL: 14,065 USD</h3>
              </div>
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </LoaderWrapper>
  );
};

export default Projects;
