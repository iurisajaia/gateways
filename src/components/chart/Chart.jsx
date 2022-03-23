import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

import useChart from "./useChart";

import "./Chart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({data, activeProject, activeGateway}) => {
    const {chartData,chartTotal} = useChart(data, activeProject, activeGateway);
    return (
        <div className="chart-box">
            {Object.keys(chartData).length && (
                <>
                    <Doughnut
                        height="270px"
                        className="doughnut"
                        options={{
                            maintainAspectRatio: false,
                            responsive: false,
                        }}
                        data={chartData}
                        type="doughnut"
                     />
                    <div className="chart-total">
                        <h3>Projects total | {chartTotal.toFixed(2)} USD</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Chart;
