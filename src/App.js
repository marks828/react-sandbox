import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

function App() {

  const array = ['1', '2', '3']
  return (
    <div className="App">
    {array.map((element, i) => (
      <Welcome name={element}/>   
    )
    )}
    </div>
  );
}

export default App;
