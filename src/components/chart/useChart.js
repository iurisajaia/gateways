import {useEffect , useState} from "react";

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
                setChartData({
                    labels: Object.values(labels).map(label => label.name),
                    datasets: [
                        {
                            label : 'none',
                            data : Object.values(labels).map(label => Math.ceil((label.amount / total) * 100)),
                            backgroundColor: ["#A259FF", "#F24E1E"],
                            borderColor: ["#A259FF", "#F24E1E"],
                            borderWidth: 1,
                        }
                    ]
                });
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