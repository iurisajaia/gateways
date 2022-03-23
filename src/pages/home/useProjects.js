import { useState } from "react";
import { useQuery } from "react-query";

import API from "../../configs/API";

const useProjects = () => {
  const [activeProjectId, setActiveProjectId] = useState(false);

  const handleChangeActiveProject = (projectId) => {
    if (projectId === activeProjectId) {
      setActiveProjectId(false);
    } else {
      setActiveProjectId(projectId);
    }
  };

  const { isLoading, error, data, isFetching } = useQuery("projects", () =>
    API("/projects").then((res) => res.data)
  );

  return {
    isLoading,
    error,
    projects: data?.data,
    isFetching,
    handleChangeActiveProject,
    activeProjectId,
  };
};

export default useProjects;
