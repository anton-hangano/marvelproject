import './App.css';
import Personajes from './components/elements/body/main';
import Navbar from './components/elements/header/navbar';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      </header>
      <main className="body">
      <Personajes></Personajes>
      </main>
    </div>
  
  );
}

export default App;
