import React, { Component } from "react";
import vegeta from "./img/vegeta.png";
import countHits from "./countHits";

class Vegeta extends Component {

    render() {
      const {name, addOneHit, hocState, vie} = this.props;
      const lifeValue = vie > 0 ? (<td> {vie} %</td>) : (<td> <span className="badge badge-danger"> Mort</span></td>);
      const button = vie > 0 ? (<button onClick={addOneHit} className="btn btn-success m-3">{name} frappe</button>) :(<button className="btn btn-danger m-3 disabled">Mort</button>);
    return (
      <div className="col">
        <img src={vegeta} alt="vegeta" />
        <br />
        {button}

        <table className="table table-striped">
          <thead>
            <tr>
                <th scope="col">Coups</th>
                <th scope="col">Vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                    {hocState.hits}
                </td>
                { lifeValue }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(Vegeta,10);
