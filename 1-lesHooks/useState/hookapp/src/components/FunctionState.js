import { useState } from "react";

const Functionstate = () => {

   const [counter, setCounter] = useState(0)

   const addOne = () => {
        setCounter(prevCounter => prevCounter +1)
    }

    return(
        <div>
            <p>Function State : {counter} </p>
            <button onClick={addOne}>State dans Fonction</button>
        </div>
    )
}

export default Functionstate;