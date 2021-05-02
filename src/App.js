import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <Router>
        <Layout>
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
