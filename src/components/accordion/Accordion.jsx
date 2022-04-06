import "./Accordion.css";
import dayjs from "dayjs";

const Accordion = ({
                       project,
                       amount,
                       name,
                       setActiveProjectId,
                       activeProjectId,
                   }) => {

    const reports = project.reports.sort((a,b) => new Date(a.created) - new Date(b.created))
    return (
        <div className="accordion" key={project?.projectId}>
            <div
                className="accordion-item"
                onClick={(e) => setActiveProjectId(project)}
            >
                <div className="accordionTitle-wrapper">
                    <h2>{name}</h2>
                    <h3>TOTAL : {amount.toFixed(2)}$</h3>
                </div>
                {activeProjectId === project?.projectId && (
                    <div
                        className="accordion-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <table>
                            <thead>
                            <tr>
                                <th width="25%" className="text-left">
                                    <span>Date</span>
                                </th>
                                <th width="25%">
                                    <span>Gateway</span>
                                </th>
                                <th width="25%">
                                    <span>Transaction ID</span>
                                </th>
                                <th width="25%" className="text-right">
                                    <span>Amount</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {!!reports.length && reports.map((report , i) => (
                                <tr key={i}>
                                    <th width="25%" className="text-left">
                                        <span>{dayjs(report.created).format('DD.MM.YYYY')}</span>
                                    </th>
                                    <th width="25%">
                                        <span>{report.gateway?.name}</span>
                                    </th>
                                    <th width="25%">
                                        <span>a732b</span>
                                    </th>
                                    <th width="25%" className="text-right">
                                        <span>{report.amount}</span>
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
