import { Component } from "react";

class Result extends Component {
  state = {
    name: "Mario",
    Winner: true,
  };

  render() {
    return(
        // this.state.Winner ? <h1>Bravo</h1> : <h1>raté!!</h1>
        this.state.Winner && <h1>Bravo</h1> 
    )
  }
}

export default Result;  
