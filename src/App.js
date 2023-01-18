import './App.css';
import JuegoComponente from './juego/JuegoComponente.js';
import InstruccionesComponente from './instrucciones/InstruccionesComponente.js';
import {EstadisticasComponente} from './estadisticas/EstadisticasComponente.js'
import React, { useState, useEffect } from 'react';

function App() {

  let tema = localStorage.getItem('tema');
  let muestraTema = tema ? tema : 'light';
  localStorage.setItem('tema', muestraTema);
  let valorTema = muestraTema === 'light' ? true : false;

  let instrucciones = localStorage.getItem('instrucciones');
  let muestraInstrucciones = instrucciones ? instrucciones : 'show';
  localStorage.setItem('instrucciones', muestraInstrucciones);
  let valorMostrarInstrucciones = muestraInstrucciones === 'show' ? true : false;
  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(valorMostrarInstrucciones);

  const [mostrarEstadisticas, setMostrarEstadisticas] = useState(false);

  useEffect(() => {
      const valor = mostrarInstrucciones ? 'show' : 'hide';
      localStorage.setItem('instrucciones', valor);
  }, [mostrarInstrucciones]);

  const startingMinutes = 5;
  const startingSeconds = 0;
  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
  const [tiempo, setTiempo] = useState(true);
  /* useEffect(() => {
    if(tiempo){
      let sampleInterval = setInterval(() => {
        if (secs > 0) {
            setSeconds(secs - 1);
        }
        if (secs === 0) {
            if (mins === 0) {
                clearInterval(sampleInterval);
                setTiempo(false);
            } else {
                setMinutes(mins - 1);
                setSeconds(59);
            }
        }
        }, 1000);
        return () => {
            clearInterval(sampleInterval);
        };
    }
      
  }, []); */

  return (
    <div className="App">
      <header className='App-header'>
        { mostrarInstrucciones &&
          <InstruccionesComponente
            tipoTema={valorTema}
            mostrarIns={mostrarInstrucciones}
            setMostrarIns={setMostrarInstrucciones}
          />
        }
        <JuegoComponente
          setMostrarIns={setMostrarInstrucciones}
          setMostrarEst={setMostrarEstadisticas}
        />
        { mostrarEstadisticas &&
          <EstadisticasComponente
            tipoTema={valorTema}
            mostrarEst={mostrarEstadisticas}
            setMostrarEst={setMostrarEstadisticas}
            reloj={[tiempo, mins, secs]}
          />
        }
      </header>
    </div>
  );
}

export default App;
