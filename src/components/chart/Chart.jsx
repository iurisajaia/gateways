import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  return (
    <div className="chart-box">
      <Doughnut
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5],
              backgroundColor: ["#A259FF", "#F24E1E", "#FFC107", "#6497B1"],
              borderColor: ["#A259FF", "#F24E1E", "#FFC107", "#6497B1"],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
