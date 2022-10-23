import {Component} from "react";
import handleClicks from "./handleClicks";
import goku from "./img/goku.jpg";

class Goku extends Component{


    render() {

        const { backGround, clickHandler } = this.props;

        return <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={goku} alt="Goku" width="300" height="400"/>
            </div>
    }
}

export default handleClicks(Goku);