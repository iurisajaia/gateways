import { Route, Switch } from "react-router-dom";
import { useQuery } from "react-query";

import API from "./configs/API";

import { HOME } from "./constants/routes";

import Home from "./pages/home/Home";

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
          <Route path={HOME} component={Home} />
        </Switch>
      </Layout>
    </LoaderWrapper>
  );
};

export default App;
