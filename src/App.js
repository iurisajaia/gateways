import { Route, Switch } from "react-router-dom";
import { useQuery } from "react-query";

import API from "./configs/API";

import { PROJECTS } from "./constants/routes";

import Projects from "./pages/home/Projects";

import LoaderWrapper from "./components/LoaderWrapper/LoaderWrapper";
import Layout from "./components/Layout/Layout";

import "./App.css";

const App = () => {
  const { isLoading, data, isFetching } = useQuery("users", () =>
    API("/users").then((res) => res.data)
  );

  return (
    <LoaderWrapper isLoading={isLoading || isFetching}>
      <Layout user={data?.data?.[0]}>
        <Switch>
          <Route path={PROJECTS} component={Projects} />
        </Switch>
      </Layout>
    </LoaderWrapper>
  );
};

export default App;
