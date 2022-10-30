import React, {useState, useEffect} from "react";

function FunctionCount() {

    const [count, setCount]=useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Mise à jour du titre via useEffect');
        document.title = `Vous avez cliqué ${count} fois`
        // setTimeout(() => {
        //     document.title = `Vous avez cliqué ${count} fois`
        // },0)
    },[count])

  return (
    <div>
      <h1>{count}</h1>
      <input type="text" value={name} onChange={e => setName( e.target.value)}/>
      <button onClick={() => setCount(count +1)}>Valider</button>
    </div>
  );
}

export default FunctionCount;
