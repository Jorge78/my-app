import React from 'react'
import '../estadisticas/EstadisticasComponente.css'

export const EstadisticasComponente = ({tipoTema, mostrarEst, setMostrarEst, reloj}) => {

    const tema = tipoTema;
    const show = mostrarEst;
    const mostrarEstadisticas = setMostrarEst;
    const tiempo = reloj[0];
    const mins = reloj[1];
    const secs = reloj[2];
    return (
        <>
            {
                show &&
                    <div id="estadisticas" style={
                        {
                            backgroundColor: `${tema ? '#e2e3e4' : '#272b3b'}`,
                            color: `${tema ? '#000' : '#fff'}`
                        }
                    }>
                        <div className="center margin10 b">
                            <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                                Estadísticas
                            </label>
                        </div>
                        <div id="contDatos" className="font14 margin10">
                            <div id="jugadas" className="datosEstadisticas">
                                <br/>
                                <label id="numJugadas" className="b">8</label>
                                <br/>
                                <label>Jugadas</label>
                            </div>
                            <div id="victorias" className="datosEstadisticas">
                                <br/>
                                <label id="numVictorias" className="b">2</label>
                                <br/>
                                <label>Victorias</label>
                            </div>
                        </div>
                        {tiempo && 
                            <div id="contTiempo" className="font14 margin10">
                                <br/>
                                <label className="font12">SIGUIENTE PALABRA</label>
                                <br/>
                                {/* <label className="b">04:10</label> */}
                                <label className="b">{mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}</label>
                            </div>
                        }
                        <div className="center font10 marginTop20">
                            <button id="btnAceptar" onClick={() => mostrarEstadisticas(false)}>Aceptar</button>
                        </div>
                        <div className="center font10 margin10">&nbsp;</div>
                    </div>
            }
        </>
    )
}
