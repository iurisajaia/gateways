import { Route, Switch } from 'react-router-dom';
import Layout from "./hocs/Layout/Layout";

import {
    PROJECTS
} from './constants/routes';

import Projects from "./pages/home/Projects";

import "./App.css";

function App() {
  return (
      <Layout>
          <Switch>
            <Route path={PROJECTS} component={Projects} />
          </Switch>
      </Layout>
  );
}

export default App;
