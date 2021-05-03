import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import GlobalStyle from "./GlobalStyle";
import Overview from "./pages/Overview/Overview";
import Orders from "./pages/Orders/Orders";
import Schedule from "./pages/Schedule/Schedule";
import Subscriptions from "./pages/Subscriptions/Subscriptions";


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
              <Route path="/orders" exact>
                  <Orders />
              </Route>
              <Route path="/overview" exact>
                  <Overview />
              </Route>
              <Route path="/schedule" exact>
                  <Schedule />
              </Route>
              <Route path="/subs" exact>
                  <Subscriptions />
              </Route>
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
