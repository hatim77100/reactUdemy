import { Component } from "react";
import Btn from "./CustomBtn";

class Result extends Component {
  state = {
    name: "Mario",
    winner: false,
  };

  changeState = () => this.setState({ winner: !this.state.winner });

  render() {
    const succes = {
      background : "green",
      color: "black"
    }
    // const red = {
    //   background : "red",
    //   borderRadius: "9999px"
    // }
    // const blue = {
    //   background : "blue",
    //   color: "#fff"
    // }
    const classColor = this.state.winner ? "alert-success" : "alert-danger";
    return (
      <div className="container">
        <div className={`alert ${classColor}`} role="alert">
          {this.state.winner ? `Bravo ${this.state.name} ` : `Raté`}
        </div>
        <Btn handleClick={this.changeState} btnStyle={succes} >Change status</Btn>
      </div>
    );
  }
}

export default Result;
