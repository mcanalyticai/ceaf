import './App.css';

import ContinuePage from './components/ContinuePage';

/*
import { 
  BrowserRouter as Router,
  Route,
  Routes
  } from 'react-router-dom';
*/

import { Link, Route } from "wouter";

import Messenger from './components/messenger/Messenger';
import SecurePage from './components/SecurePage';

  /*
const getName = ({name}) => {
  console.log(name)
  return(name)
}
*/

// getName()

function App({name}) {
  
  return (
    <div className="App">
      
      
        {/* <Route exact path="/" element={<ContinuePage />} /> */}
        {/*
        <li className="link">
          <Link className="banner" to="/">Home</Link>
          <br></br>
          <Link className="banner" to="/messenger">Encrypted page</Link>
          <br></br>
          */}
          {/* 
          <Route path="/ajsdaoinva0931075190i3nan0419n145i1" component={SecurePage}></Route>
          <Route path="/" element={ContinuePage}>Home</Route>
        
        </li>*/}
        <Route path="/" component={ContinuePage}></Route>
        <Route path="/ajsdaoinva0931075190i3nan0419n145i1" component={SecurePage}></Route>
      
    </div>
  );
}

export default App;
