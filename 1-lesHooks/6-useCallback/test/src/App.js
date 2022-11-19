import './App.css';
import Button from './components/Button';
import Count from './components/Count';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useCallback} from 'react';

function App() {
  const [countOne, setCountOne] = useState({value: 0, btnColor: 'success', increment: 25});
  const [countTwo, setCountTwo] = useState({value: 0, btnColor: 'danger', increment: 20});

  const incrementCountOne = useCallback((val) => {
    countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
  },[countOne])

  const incrementCountTwo = useCallback((valTwo) => {
    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + valTwo})
  },[countTwo])
 
  return (
    <div className="container">
      <Count count={countOne.value} bgColor={countOne.btnColor}/>
      <Count count={countTwo.value} bgColor={countTwo.btnColor}/>

      <Button handleClic={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
      <Button handleClic={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>
    </div>
  );
}

export default App;
