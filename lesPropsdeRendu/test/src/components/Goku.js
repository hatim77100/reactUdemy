import {Component} from "react";
import goku from "../img/goku.jpg";

class Goku extends Component{

 
    render() {
        
        const {hits, addOne, name} = this.props;

        return <div className="col ">
                <img src={goku} alt="Goku" width="300" height="400"/>
                <br />
                <button onClick={addOne} className="btn btn-success m-3">{name} Frapper</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hits}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    }
}

export default Goku;