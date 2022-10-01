import { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';


class App extends Component{
  state = {
    titre: 'Mon catalogue voitures 2',
    color: 'green'
  }
  render() {
    return (
      <div className="App">
       <Mycars 
       color = {this.state.color}
       title = {this.state.titre}/>
      </div>
    );
  }
}

export default App;
