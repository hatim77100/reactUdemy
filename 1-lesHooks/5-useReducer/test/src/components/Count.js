import React, {useReducer} from "react";

const initialState = 0;
const reducer = (state, action) => {
 switch(action) {
    case 'increment' : return parseInt(state +1);
    break;
    case 'decrement' : return parseInt(state - 1);
    break;
    case 'réanitialisé' : return initialState;
    break;
    default : return state;
 }
}

function Count() {


    const[count, dispatch] = useReducer(reducer, initialState);

  return <div>
    <h1>{count}</h1>
    <button onClick={() => dispatch('increment')}>+</button>
    <button onClick={() => dispatch( 'decrement')}>-</button>
    <button onClick={() => dispatch( 'réanitialisé')}>0</button>
  </div>;
}

export default Count;
