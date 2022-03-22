import {useQuery} from "react-query";

import API from "../../network/API";

const useProjects = () => {

    const { isLoading, error, data, isFetching } = useQuery("projects", () =>
        API('/projects').then((res) => res.data)
    );

    return {
        isLoading,
        error,
        projects : data?.data,
        isFetching
    }

};

export default useProjects;


