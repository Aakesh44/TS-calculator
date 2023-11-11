import './App.css';
import Heading from './components/Heading.tsx'
import Main from './components/Main.tsx'

// tsc --init
function App() {
  return (
    <div className="App">

      <Heading title='CALCULATOR '/>

      <Main/>

    </div>
  );
}

export default App;
