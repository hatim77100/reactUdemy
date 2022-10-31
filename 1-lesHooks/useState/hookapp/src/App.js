import './App.css';
import ClassState from './components/classState';
import Functionstate from "../src/components/FunctionState"

function App() {
  return (
    <div className="App">
     <h1>useState Hooks</h1>
     <ClassState/>
     <hr />
     <Functionstate/> 
    </div>
  );
}

export default App;
