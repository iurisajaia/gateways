import "./Accordion.css";

const Accordion = ({
  projectId,
  name,
  setActiveProjectId,
  activeProjectId,
}) => {
  return (
    <div className="accordion" key={projectId}>
      <div
        className="accordion-item"
        onClick={(e) => setActiveProjectId(projectId)}
      >
        <div className="accordionTitle-wrapper">
          <h2>{name}</h2>
          <h3>TOTAL : 9091$</h3>
        </div>
        {activeProjectId === projectId && (
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
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
