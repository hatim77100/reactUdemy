import React, { Component } from "react";
import goku from "./img/goku.jpg";
import countHits from "./countHits";

class Goku extends Component {
  render() {
    const { name, addOneHit, hocState, vie } = this.props;
    const lifeValue =
      vie > 0 ? (
        <td> {vie} %</td>
      ) : (
        <td>
          {" "}
          <span className="badge badge-danger"> Mort</span>
        </td>
      );
    const button =
      vie > 0 ? (
        <button onClick={addOneHit} className="btn btn-success m-3">
          {name} frappe
        </button>
      ) : (
        <button className="btn btn-danger m-3 disabled">Mort</button>
      );
    return (
      <div className="col">
        <div>
          <img src={goku} alt="vegeta" />
          <br />
          {button}
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Coups</th>
                <th scope="col">Vie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{hocState.hits}</td>
                {lifeValue}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default countHits(Goku,20);
