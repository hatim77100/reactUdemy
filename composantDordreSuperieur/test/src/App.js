import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vegeta from './Vegeta';
import Goku from './Goku';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      vegeta: 100,
      goku: 100,
    }
  }

  reduceLife = (param, param2) => {
    if(param === "Goku") {
      this.setState({
        vegeta: this.state.vegeta -param2
      })
    } else {
      this.setState({
        goku: this.state.goku -param2
      })
    }
  }

  render () {

    return (
      <div className="container text-center">
       <h1>Goku Vs Vegeta</h1>
       <hr />
       <div className="row">
        <Vegeta name="Vegeta" vie={this.state.vegeta} reduceHandler={this.reduceLife}/>
        <Goku name="Goku" vie={this.state.goku} reduceHandler={this.reduceLife}/>
       </div>
      
      </div>
    )
  }
}

export default App;
