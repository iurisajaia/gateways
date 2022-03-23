import {useEffect, useState} from "react";
import {useMutation, useQuery} from "react-query";

import API from "../../configs/API";
import {DateObject} from "react-multi-date-picker";

const useHome = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [activeGateway, setActiveGateway] = useState(null);
    const [startDate, setStartDate] = useState(new DateObject('2021-01-01'));
    const [endDate, setEndDate] = useState(new DateObject('2021-12-31'));

    const [activeProjectId, setActiveProjectId] = useState(false);

    const [data, setData] = useState({});



    const handleChangeActiveProject = (project) => {
        if (project?.projectId === activeProjectId) {
            setActiveProjectId(false);
        } else {
            setActiveProjectId(project?.projectId);
        }
    };



    const gatewaysQuery = useQuery("gateways",  async ()  => await API.get('/gateways').then(res => res.data?.data));
    const gateways = gatewaysQuery?.data;


    const projectsQuery = useQuery("projects", async () => await API.get('/projects').then(res => res?.data?.data));
    const projects = projectsQuery?.data;

    const isLoading = gatewaysQuery?.data?.isLoading | projectsQuery?.data?.isLoading;


    const reportMutation = useMutation('report', async (reportData) => {
        return await API.post('/report', reportData).then(res => {
            const projectsObj = {};

            projects.forEach((project) => {

                const id = project.projectId;
                const reports = res.data?.data;

                let projectReports = [];
                let amount = 0;

                reports.forEach(report => {
                    if(report.projectId === id){
                        report.gateway = gateways.find(gate => gate.gatewayId === report.gatewayId)
                        projectReports.push(report);
                        amount += report.amount;
                    }
                })
                projectsObj[id] = {
                    name : project.name,
                    amount,
                    reports : projectReports,
                    projectId : project.projectId
                }
            })

            setData(projectsObj);

        })
    })


    useEffect(() => {
        if(!isLoading && projects && projects.length && gateways && gateways.length){
            const mutateObj = {
                from : startDate.format('YYYY-MM-DD'),
                to : endDate.format('YYYY-MM-DD'),
            }
            if(activeProjectId && activeProjectId !== 'All Projects'){
                mutateObj.projectId = activeProjectId;
                console.log('data' , data[activeProjectId] , activeProjectId)
                // setData(prevState => ({
                //     [activeProject] : prevState[activeProject]
                // }))
            }else{
                delete mutateObj.projectId;
            }
            reportMutation.mutate(mutateObj)
        }
    }, [activeProjectId , activeGateway , startDate , endDate , projects, gateways])


    return {
        isLoading: isLoading,
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
        gateways
    };
};

export default useHome;
