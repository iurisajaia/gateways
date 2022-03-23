import LoaderWrapper from "../../components/LoaderWrapper/LoaderWrapper";
import Accordion from "../../components/accordion/Accordion";
import Filters from "../../components/filters/Filters";
import Empty from "../../components/empty/Empty";

import useHome from "./useHome";

import "./Home.css";
import Chart from "../../components/chart/Chart";


const Home = () => {
    const {
        isLoading,
        data,
        projects,
        gateways,
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
        projectsTotal,
        reportIsOpen,
        setReportIsOpen
    } = useHome();


    return (<LoaderWrapper isLoading={isLoading}>
        <div className="content-filters">
            <Filters
                projects={projects}
                gateways={gateways}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
                activeGateway={activeGateway}
                setActiveGateway={setActiveGateway}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                reportIsOpen={reportIsOpen}
                setReportIsOpen={setReportIsOpen}
            />
        </div>
        <div className="content-body">
            {data && !!Object.keys(data).length && !isLoading ? (
                <div className="projects">
                    <div className={`projects-wrapper ${reportIsOpen ? 'half-width--withAnimation' : 'full-width'}`}>
                        <h2>{activeProject?.name || 'All projects'} | {activeGateway?.name || 'All gateways'}</h2>

                        {Object.values(data).map((project) => (<Accordion
                            name={project?.name}
                            amount={project?.amount}
                            project={project}
                            key={project?.projectId}
                            setActiveProjectId={handleChangeActiveProject}
                            activeProjectId={activeProjectId}
                        />))}

                        {!reportIsOpen && (
                            <div className="projects-total">
                                <h3>TOTAL: {projectsTotal.toFixed(2)} USD</h3>
                            </div>
                        )}


                    </div>
                    {reportIsOpen && (
                        <div className="report half-width">
                            <Chart data={data} activeProject={activeProject} activeGateway={activeGateway}/>
                        </div>
                    )}

                </div>
            ) : (<Empty/>)}
        </div>
    </LoaderWrapper>);
};

export default Home;
