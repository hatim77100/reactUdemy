import {Component} from 'react';
import LifeCycle from './LifeCycle';
import './App.css';

class App extends Component {

  state = {
    display: true,
  }

  effacerOuAfficher = () => {
    this.state.display ? (this.setState({ display: false})) : (this.setState({ display: true})) ;
  }

  render () {

    const showComponent = this.state.display ? (<LifeCycle name="Toto 2"/>) : (<div></div>);

    return (
      <div className="App">
        
      {
        showComponent
      }

        <button onClick={this.effacerOuAfficher}>cliquer ici</button>
      </div>
    );
  }
}

export default App;
