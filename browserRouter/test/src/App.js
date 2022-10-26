import "./App.css";
import Docs from "./components/docs";
import Tutorials from "./components/tutorials";
import Community from "./components/community";
import Menu from "./components/menu";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Component} from "react";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       underConst: {
        Docs: false,
        Tutorials: true,
        Community: false,
       }
    }
  }

  render() {
    return (
      <BrowserRouter className="App">
        <Menu />
        <Switch>
          <Route path="/docs" component={Docs} />
          <Route path="/tutorial" component={Tutorials} />
          <Route path="/community" component={Community} />
          <Route path="/users/:profileId" component={Profile}/>
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
