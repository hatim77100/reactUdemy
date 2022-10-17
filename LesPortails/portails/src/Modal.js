import { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="modal" onClick={this.props.close}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            omnis eos ducimus, veritatis minima consequatur inventore illo
            repellendus ipsa alias.
          </p>
          <button>Fermer</button>
        </div>
      </div>
    );
  }
}

export default Modal;
