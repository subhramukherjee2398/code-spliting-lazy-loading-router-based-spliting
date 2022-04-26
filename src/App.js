
import About from './About';
import './App.css';
import Home from './Home';
import { Add } from './Math';
console.warn(Add(5,10))

function App() {
  return (
    <div className="App" style={{display:"flex",flexDirection:'row'}}>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
