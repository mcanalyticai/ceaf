import './App.css';

import ContinuePage from './components/ContinuePage';

function App({updated}) {
  
  return (
      
      <div className="App">
        
          <ContinuePage></ContinuePage>
          <div>{ updated ? console.log(updated) : null }</div>
      </div>
  );
}

export default App;
