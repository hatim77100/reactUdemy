import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect, useMemo} from 'react';
import Profile from './components/Profile';
import axios from 'axios';

function App() {

  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});
  const [dark, setDark] = useState(false);
  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(response=>{
      setProfile(response.data);
    })
    .catch(err=> {
      console.log(err);
    })
  },[count]);

  const memorizedValue = useMemo(() => {
    console.log('je suis dans isOverten');
    return count > 10;
  },[count])

  // const isOverTen = () => {
  //   console.log('je suis dans isOverten');
  //   return count > 10;
  // }

  const darkTheme = () => {
    setDark(!dark);

    if(!dark) {
      document.body.classList.add("bg-secondary");
    } else {
      document.body.classList.remove("bg-secondary");
    }
  }

  const classBtnTheme = dark ? 'btn-light': 'btn-dark';
  const textBtnTheme = dark ? 'Rendre clair': 'rendre sombre';

  return (
    <div className="container">
      <h1 className="text-center">useMemo()</h1>
      {memorizedValue && <div className='alert alert-danger' role='alert'>Stop!!!</div>}
      <button className="btn btn-info mb-3" onClick={() => setCount(count+1)}>Increment {count}</button>
      <button className={`btn ${classBtnTheme} mb-3 float-end`} onClick={()=>darkTheme()}>{textBtnTheme}</button>
     <Profile profile={profile} count={count}/>
    </div>
  );
}

export default App;
