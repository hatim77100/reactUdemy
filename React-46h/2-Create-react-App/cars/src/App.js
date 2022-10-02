import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <Mycars/>
      </div>
    )
  }
}

export default App;