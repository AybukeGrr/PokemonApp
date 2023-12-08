import './App.css';
import './PokeCard.css';
import PokeCard from './PokeCard';
import PokeGame from './PokeGame';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"#f5576c"}}>Pokemon Game</h1>
      <PokeGame/>
    </div>
  );
}

export default App;
