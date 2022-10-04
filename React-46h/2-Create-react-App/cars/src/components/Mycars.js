import React, { Component } from "react";
import Car from "./Cars";
import Myheader from "./Myheader";
import Wrapper from "./Wrapper";

class Mycars extends Component {
    noCopy = () => {
        alert("merci de ne pas copier le texte");
    } 

    // addStyle = (e) => {
    //     console.log(e.target);
    //     e.target.classList.contains("styled") ? e.target.classList.remove("styled")  : e.target.classList.add("styled")
    // }

    state = {
        cars: ["Ford", "Mercedes", "Peugeot"],
    };
    render() {
        const { title} = this.props;
        
        // Avec React on fait "onCopy" en camel case
    return (
      <div>
        <h1> {title} </h1>
        {/* <p onCopy={this.noCopy}> 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
          quae praesentium quod error quidem sequi in dignissimos similique,
          tempora tenetur odit, minus ex ipsam corporis debitis, dolor eius
          commodi!
        </p> */}
        <Car color="red">{this.state.cars[0]}</Car>
        <Car>{this.state.cars[1]}</Car>
        <Car color="green">{this.state.cars[2]}</Car>
      </div>
    );
  }
}

export default Mycars;
