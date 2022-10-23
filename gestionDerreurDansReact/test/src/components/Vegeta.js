import {Component} from "react";
import handleClicks from "./handleClicks";
import vegeta from "./img/vegeta.webp";

class Vegeta extends Component{

    render() {

        const { backGround, clickHandler } = this.props;

        return <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={vegeta} alt="Goku" width="300" height="400"/>
            </div>
    }
}

export default handleClicks(Vegeta);