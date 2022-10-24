import "./App.css";
import Docs from "./components/docs";
import Tutorials from "./components/tutorials";
import Community from "./components/community";
import Menu from "./components/menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter className="App">
      <Menu />
      <Switch>
        <Route path="/docs" component={Docs} />
        <Route path="/tutorial" component={Tutorials} />
        <Route path="/community" component={Community} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
