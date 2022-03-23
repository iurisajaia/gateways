import {useState} from "react";
import {DateObject} from "react-multi-date-picker";

import LoaderWrapper from "../../components/LoaderWrapper/LoaderWrapper";
import Accordion from "../../components/accordion/Accordion";
import Filters from "../../components/filters/Filters";
import Empty from "../../components/empty/Empty";

import useHome from "./useHome";

import "./Home.css";


const Home = () => {
    const {
        isLoading,
        data,
        handleChangeActiveProject,
        activeProjectId,
        activeProject,
        setActiveProject,
        activeGateway,
        setActiveGateway,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
    } = useHome();


    return (<LoaderWrapper isLoading={isLoading}>
            <div className="content-filters">
                <Filters
                    projects={data}
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                    activeGateway={activeGateway}
                    setActiveGateway={setActiveGateway}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                />
            </div>
            <div className="content-body">
                {data && !!Object.keys(data).length ? (<div className="projects">
                        <div className="projects-wrapper">
                            <h2>{activeProject || 'All projects'} | {activeGateway || 'All gateways'}</h2>

                            {Object.values(data).map((project ) => (<Accordion
                                    name={project?.name}
                                    amount={project?.amount}
                                    project={project}
                                    key={project?.projectId}
                                    setActiveProjectId={handleChangeActiveProject}
                                    activeProjectId={activeProjectId}
                                />))}

                            <div className="projects-total">
                                <h3>TOTAL: 14,065 USD</h3>
                            </div>
                        </div>
                    </div>) : (<Empty/>)}
            </div>
        </LoaderWrapper>);
};

export default Home;
