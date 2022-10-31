import "./App.css";
import React from "react";
import Profile from "./components/profile";
import { UserContext } from "./components/MyContext";
import { ColorContext } from "./components/MyContext";

class App extends React.Component {
  state = {
    user: {
      name: "Lisa",
      age: 8,
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value={'red'}>
          <Profile />
        </ColorContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
