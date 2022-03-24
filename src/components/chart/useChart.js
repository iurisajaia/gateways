import {useEffect , useState} from "react";

import {chartColors} from "../../constants/colors";

const useChart = (data, activeProject, activeGateway) => {

    const [ chartData , setChartData ] = useState({});
    const [ chartTotal , setChartTotal ] = useState(0);

    // {
    //     labels: ["Red", "Blue"],
    //         datasets: [
    //     {
    //         label: "# of Votes",
    //         data: [12, 19],
    //         backgroundColor: ["#A259FF", "#F24E1E"],
    //         borderColor: ["#A259FF", "#F24E1E"],
    //         borderWidth: 1,
    //     },
    // ],
    // }
    useEffect(() => {
        if (Object.keys(data).length) {
            let total = 0;
            const labels = {};

            Object.values(data).forEach(project => {
                Object.keys(project.gateways).forEach(gatewayId => {
                    const gateway = project.gateways[gatewayId];
                    total += gateway.amount;
                    if(labels[gatewayId]){
                        labels[gatewayId].amount += gateway.amount;
                    }else{
                        labels[gatewayId] = {
                            amount : gateway.amount,
                            name : gateway?.gateway?.name
                        }
                    }
                })
            })

            if(Object.keys(labels).length){
                let chartDataObj = {
                    labels : [],
                    datasets : [
                        {
                            data : [],
                            backgroundColor : [],
                            borderColor : [],
                            borderWidth : 1
                        }
                    ]
                };
                Object.values(labels).map((label , i) => {
                    chartDataObj.labels.push(label.name);
                    chartDataObj.datasets[0].data.push(Math.ceil((label.amount / total) * 100));
                    chartDataObj.datasets[0].backgroundColor.push(chartColors[i]);
                    chartDataObj.datasets[0].borderColor.push(chartColors[i]);
                })

                setChartData(chartDataObj);
            }

            setChartTotal(total);
        }
    }, [data, activeProject, activeGateway]);

    return {
        chartData,
        chartTotal
    };
};

export default useChart;