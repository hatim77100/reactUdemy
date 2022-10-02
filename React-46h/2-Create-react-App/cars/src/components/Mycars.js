import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voiture : [
            {name: 'Ford', color: 'red', year: 2000},
            {name: 'Mercedes', color: 'black', year: 2010},
            {name: 'Peugeot', color: 'green', year: 2018}
        ],
        titre : "Mon catalogue Voitures"
    }

    addtenYears = () => {
        const updatedState = this.state.voiture.map((param) => {return param.year -= 10;})
        this.setState({
            updatedState
        })
    }

    render() {
        const year = new Date().getFullYear()
        return (
            <div>
                <h1>{this.state.titre}</h1>

                <button onClick={this.addtenYears}>+ 10 ans</button>    
                {/* <Car year={year - this.state.voiture[0].year + ' ans'} color={this.state.voiture[0].color}>{this.state.voiture[0].name}</Car>
                <Car year={year - this.state.voiture[1].year + ' ans'} color={this.state.voiture[1].color}>{this.state.voiture[1].name}</Car>
                <Car year={year - this.state.voiture[2].year + ' ans'} color={this.state.voiture[2].color}>{this.state.voiture[2].name}</Car> */}

                {
                  this.state.voiture.map((voiture, index) => {
                    return <Car key={index} year={year - voiture.year + ' ans'} color={voiture.color}>{voiture.name}</Car>
                  })  
                }
            </div>
           
        )
    }
}

export default Mycars