import "./Filters.css";

import Select from "../select/Select";



const Filters = () => {
    return (
        <div className="flex-between">
            <div className="filtersText-wrapper">
                <h2>Reports</h2>
                <h6>Easily generate a report of your transactions</h6>
            </div>
            <div className="filters-wrapper">
                <Select title="Select Project" />
                <Select title="Select Gateway" />
                <Select title="From Date" />
                <Select title="To Date" />
            </div>
        </div>
    );
};

export default Filters;