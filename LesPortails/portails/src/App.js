import "./App.css";
import { Component } from "react";
import Modal from "./Modal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: "false",
    };
  }

  handleShow = () => {
    this.setState({
      showModal: "true",
    });
  };

  handleHide = () => {
    this.setState({
      showModal: "false",
    });
  };

  render() {
    const modal = this.setState.showModal ? (
      <Modal close={this.handleHide} />
    ) : null;

    return (
      <div className="App">
        <button onClick={this.handleShow}>Afficher Le modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
