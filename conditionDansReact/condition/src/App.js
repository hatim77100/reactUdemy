
// import Result from './Game';
// import Btn from './CustomBtn';

import Welcome from "./welcome";
import Template from "./Template";

function App() {
  // const sayHello = () => alert("Hello World");
  return (
    <>
     <Template/>
     {/* <Result />
     <Btn btnStyle={{backgroundColor: 'yellow', color: "blue"}} handleClick={sayHello}>Say hellow</Btn> */}
      <Welcome/>
    </>
  );
}

export default App;
