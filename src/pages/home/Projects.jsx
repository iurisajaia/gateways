import { useState } from "react";

import useProjects from "./useProjects";

import LoaderWrapper from "../../hocs/LoaderWrapper/LoaderWrapper";
import Accordion from "../../components/accordion/Accordion";
import Empty from "../../components/empty/Empty";

import "./Projects.css";


const Projects = () => {
    const { projects , isLoading } = useProjects();

    const [activeProjectId, setActiveProjectId] = useState(false);

    const handleChangeActiveProject = projectId => {
        if(projectId === activeProjectId){
            setActiveProjectId(false);
        }else{
            setActiveProjectId(projectId);
        }
    }

    return (
        <LoaderWrapper isLoading={isLoading}>

            {projects && !!projects.length ? (
                <div className="projects">
                    <div className="projects-wrapper">

                        <h2>All projects | All gateways</h2>

                        {projects.map(({projectId , name}) => (
                            <Accordion
                                name={name}
                                projectId={projectId}
                                key={projectId}
                                setActiveProjectId={handleChangeActiveProject}
                                activeProjectId={activeProjectId}
                            />
                        ))}
                    </div>

                    <div className="projects-total">
                        <h3>TOTAL: 14,065 USD</h3>
                    </div>
                </div>
            ) : <Empty/>}

        </LoaderWrapper>
    );
};

export default Projects;