import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import GlobalStyle from "./GlobalStyle";


function App() {
  return (
    <Router>
        <GlobalStyle />
        <Layout>
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/dashboard" exact>
                  <Dashboard />
              </Route>

          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
