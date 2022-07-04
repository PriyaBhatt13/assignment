import RepoList from "./containers/repoList/RepoList";
import RepoDetail from "./containers/repoDetail/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:name">
            <RepoDetail />
          </Route>
          <Route path="/">
            <RepoList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
