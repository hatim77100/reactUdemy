import {Component} from "react";
import handleClicks from "./handleClicks";
import frieza from "./img/frieza.jpg";

class Frieza extends Component{


    render() {

     
        const { backGround, clickHandler } = this.props;

        return <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={frieza} alt="frieza" width="300" height="400"/>
            </div>
    }
}

export default handleClicks(Frieza);