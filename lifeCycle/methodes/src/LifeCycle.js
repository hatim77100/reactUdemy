import {Component} from 'react';
// import ChildComponent from './ChildComponent';

class LifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Toto',
         step : 1
      }
      console.log(`Etape ${this.state.step} : je suis dans le constructor`);
    } 

    componentDidMount() {
      console.log(`Etape ${this.state.step} : je suis dans componentDidMount()`);
      this.setState({
        name: this.props.name,
        step: this.state.step + 1
      })
      console.log(`Etape ${this.state.step} : setState() a changé le state dans le componentDidMount()`);
    };

    componentDidUpdate(prevProps, prevState) {
      console.log(`Etape ${this.state.step} : je suis dans le componentDidUpdate()`);
      console.log(prevState);
      console.log(this.state);
    }

    componentWillUnmount() {
      console.log(`je suis dans le componentWillUnmount()`);
     }

  render () {

    console.log(`Etape ${this.state.step} : je suis dans le RENDER5()`);

    return (
      <div className="borderBox">
        {console.log(`Etape ${this.state.step} : Mise à jour du DOM`)} 
        <p>Chargement: {this.state.step}</p>
        <p>Nom: {this.state.name}</p>
 
      </div>
    );
  }
}

export default LifeCycle;