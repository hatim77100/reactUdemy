import React, { Component } from "react";

export class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(`je suis dans le constructor enfant`);
  }

  componentDidMount() {
    console.log(` je suis dans componentDidMount() Enfant`);
  }

  render() {
    console.log(`je suis dans le RENDER5() Enfant`);
    return (
      <div>
        {console.log("Mise à jour du DOM Enfant")}
        ChildComponent
      </div>
    );
  }
}

export default ChildComponent;
