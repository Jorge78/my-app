import './App.css';
import JuegoComponente from './juego/JuegoComponente.js';
import InstruccionesComponente from './instrucciones/InstruccionesComponente.js';

function App() {

  const tema = localStorage.getItem('tema');
  const valorTema = tema ? tema : 'light'
  localStorage.setItem('tema', valorTema);

  return (
    <div className="App">
      <header className='App-header'>
        <InstruccionesComponente />
        <JuegoComponente />
      </header>
    </div>
  );
}

export default App;
