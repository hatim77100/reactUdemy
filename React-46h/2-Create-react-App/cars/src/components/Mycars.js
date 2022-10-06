import { Component, Fragment } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voiture: [
      { name: "Ford", color: "red", year: 2022 },
      { name: "Mercedes", color: "black", year: 2021},
      { name: "Peugeot", color: "green", year: 2018 },
    ],
    titre: "Mon catalogue Voitures",
  };

  addtenYears = () => {
    const updatedState = this.state.voiture.map((param) => {
      return (param.year -= 10);
    });
    this.setState({
      updatedState,
    });
  };

  getAge = (year) => {
    const now = new Date().getFullYear();
    const age = now - year
    
    // ans, an,
    let frenchYearStr = "";
    if(age === 1) {
        frenchYearStr = "an";
    } else if (age > 1) {
        frenchYearStr = "ans";
    }
    return `${age} ${frenchYearStr}`
  }

  render() {
    return (
      < >
        <h1>{this.state.titre}</h1>

        <button onClick={this.addtenYears}>+ 10 ans</button>

        {
        this.state.voiture.map(({name, color, year}, index) => {
          return (
            <div key={index}>
            <Car
              color={color}
              year= {this.getAge(year)}
              >
              {name}
              </Car>
            </div>
          )
        })
        }
      </>
    );
  }
}

export default Mycars;
