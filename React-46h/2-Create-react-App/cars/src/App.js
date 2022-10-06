import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
// import {Welcome} from './components/Welcome';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  
  render() {
  
    return (

      <div className='App'>
        {/* <Welcome ></Welcome> */}
        <h1>{this.state.titre}</h1>
        <Mycars/>
      </div>
    )
  }
}

export default App;