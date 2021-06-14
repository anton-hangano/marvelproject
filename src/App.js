import './App.css';
import Character from './components/elements/body/main';
import Navbar from './components/elements/header/navbar';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      </header>
      <main>
      <Character></Character>
      </main>
    </div>
  
  );
}

export default App;
