import { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';


class App extends Component{

  state = {
    titre: 'Mon catalogue voitures 2',
    color: 'green'
  }

  changeTitle = (e) => {
    // console.log(e.target);
    this.setState({
      titre: "Voici enfin"
    })
  }

  changeViaParam = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }

  changeViaInput = (e) => {
    this.setState({
      titre : e.target.value
    })

  }

  render() {
    return (
      <div className="App">
       <Mycars 
       color = {this.state.color}
       title = {this.state.titre}/>
       <button onClick={this.changeTitle}>changer le nom en dur</button>
       <button onClick={() => this.changeViaParam("titre via param")}>changer le nom via param</button>
       <button onClick={this.changeViaBind.bind(this, "Titre via Bind")}>changer le nom via Bind</button>
       <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
      </div>
    );
  }
}

export default App;
