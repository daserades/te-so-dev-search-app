import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/results">
          <SearchResults />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route> */}
        <Route path="/" exact component={LandingPage}/>
        <Route path="/results" exact component={SearchResults}/>
      </Switch>
    </Router>
  );
};

export default App;
