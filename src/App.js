import react from "react";
import Home from "./component/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./component/css/dashboard.css";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
