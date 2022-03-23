import Dropdown from "../dropdown/Dropdown";

import "./Filters.css";

const Filters = ({
                     projects,
                     activeProject,
                     setActiveProject,
                     activeGateway,
                     setActiveGateway,
                     startDate,
                     setStartDate,
                     endDate,
                     setEndDate
                 }) => {

    return (
        <div className="flex-between">
            <div className="filtersText-wrapper">
                <h2>Reports</h2>
                <h6>Easily generate a report of your transactions</h6>
            </div>
            <div className="filters-wrapper">
                <Dropdown
                    title="All Projects"
                    options={Object.values(projects)}
                    activeItem={activeProject}
                    setActiveItem={setActiveProject}
                />
                <Dropdown
                    title="All Gateways"
                    options={[]}
                    activeItem={activeGateway}
                    setActiveItem={setActiveGateway}
                />
                <Dropdown
                    title="From Date"
                    options={[]}
                    activeItem={startDate}
                    setActiveItem={setStartDate}
                    isDate
                />
                <Dropdown
                    title="To Date"
                    options={[]}
                    activeItem={endDate}
                    setActiveItem={setEndDate}
                    isDate
                />
                <button className="report-btn">Generate Report</button>
            </div>
        </div>
    );
};

export default Filters;
