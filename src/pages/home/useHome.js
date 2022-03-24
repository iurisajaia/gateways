import {useEffect, useState} from "react";
import {useMutation, useQuery} from "react-query";
import {DateObject} from "react-multi-date-picker";

import API from "../../configs/API";

const useHome = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [activeGateway, setActiveGateway] = useState(null);
    const [startDate, setStartDate] = useState(new DateObject('2021-01-01'));
    const [endDate, setEndDate] = useState(new DateObject('2021-12-31'));

    const [activeProjectId, setActiveProjectId] = useState(false);
    const [reportIsOpen, setReportIsOpen] = useState(true);
    const [projectsTotal, setProjectsTotal] = useState(0);

    const [data, setData] = useState({});

    const gatewaysQuery = useQuery("gateways", async () => await API.get('/gateways').then(res => res.data));
    const gateways = gatewaysQuery?.data?.data;


    const projectsQuery = useQuery("projects", async () => await API.get('/projects').then(res => res?.data));
    const projects = projectsQuery?.data?.data;

    const isLoading = gatewaysQuery?.isLoading || projectsQuery?.isLoading;

    const reportMutation = useMutation('report', async (reportData) => {
        return await API.post('/report', reportData).then(res => {
            const projectsObj = {};

            let filteredGateways = gateways;
            if (activeGateway && typeof activeGateway !== 'string') {
                filteredGateways = gateways.filter(gt => gt.gatewayId === activeGateway.gatewayId);
            }

            if (activeProject && typeof activeProject !== 'string') {
                const project = projects.find(p => p.projectId === activeProject.projectId);
                serializeProjects(project, res?.data?.data, filteredGateways, projectsObj)
            } else {
                projects.forEach((project) => serializeProjects(project, res?.data?.data, filteredGateways, projectsObj))
            }

            setData(projectsObj);
        })
    })

    const serializeProjects = (project, reports, gateways, projectsObj) => {
        const id = project.projectId;

        let projectReports = [];
        let amount = 0;
        let gatewaysTotal = 0;

        let gatewaysObj = {};

        reports.forEach(report => {
            const gateway = gateways.find(gate => gate.gatewayId === report.gatewayId);
            if (report.projectId === id && gateway) {
                report.gateway = gateway;
                projectReports.push(report);
                amount += report.amount;
                
                // add gateways object for chart
                if (!gatewaysObj[gateway.gatewayId]) {
                    gatewaysTotal += report.amount;
                    gatewaysObj[gateway.gatewayId] = {
                        gateway,
                        amount: report.amount
                    };
                }
            }
        })

        projectsObj[id] = {
            name: project.name,
            amount,
            reports: projectReports,
            projectId: project.projectId,
            gateways: gatewaysObj,
            gatewaysTotal
        }

        return projectsObj;
    }

    // filter data by [ projectId , gatewayId , startDate , endDate ]
    useEffect(() => {
        if (!isLoading && projects && projects.length && gateways && gateways.length) {
            const mutateObj = {
                from: startDate.format('YYYY-MM-DD'),
                to: endDate.format('YYYY-MM-DD'),
            }
            if (activeProject && typeof activeProject !== 'string') {
                mutateObj.projectId = activeProject.projectId;
            } else {
                delete mutateObj.projectId;
            }

            if (activeGateway && typeof activeGateway !== 'string') {
                mutateObj.gatewayId = activeGateway.gatewayId;
            } else {
                delete mutateObj.gatewayId;
            }
            reportMutation.mutate(mutateObj)
        }
    }, [activeProjectId, activeGateway, startDate, endDate, projects, gateways, activeProject, activeGateway])

    // set projects total
    useEffect(() => {
        if (Object.keys(data).length) {
            let amount = 0;
            Object.values(data).forEach(project => amount += project.amount);
            setProjectsTotal(amount);
        }
    }, [data])

    const handleChangeActiveProject = (project) => {
        if (project?.projectId === activeProjectId) {
            setActiveProjectId(false);
        } else {
            setActiveProjectId(project?.projectId);
        }
    };


    return {
        isLoading,
        data,
        projects,
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
        gateways,
        projectsTotal,
        reportIsOpen,
        setReportIsOpen
    };
};

export default useHome;
