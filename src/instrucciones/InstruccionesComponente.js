import '../instrucciones/InstruccionesComponente.css';
//import React, { useState, useEffect } from 'react';

function InstruccionesComponente({tipoTema, mostrarIns, setMostrarIns}){

    //const tema = localStorage.getItem('tema') == 'light' ? true : false;
    //const valorMostrar = localStorage.getItem('mostrarInstrucciones') == 'show' ? true : false;
    
    //const valorMostrar = mostrar == 'show' ? true : false;
    //const [show, setMostrar] = useState(valorMostrar);

    /* useEffect(() => {
        const valor = show ? 'show' : 'hide';
        localStorage.setItem('instrucciones', valor);
    }, [show]); */

    const tema = tipoTema;
    const show = mostrarIns;
    const mostrarInstrucciones = setMostrarIns;

    return (
        <>
            { show ?
                (<div id="instrucciones" style={{backgroundColor: `${tema ? '#e2e3e4' : '#272b3b'}`}}>
                    <div className="center margin10 b">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Cómo jugar
                        </label>
                    </div>
                    <div className="left font10 margin10">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Adivina la palabra oculta en 5 intentos.
                        </label>
                    </div>
                    <div className="left font10 margin10">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Cada intento debe ser una palabra válida de 5 letras.
                        </label>
                    </div>
                    <div className="left font10 margin10">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Despues de cada intento el color de las letras cambia<br />
                            para mostrar que tan cerca estas de acertar la palabra.
                        </label>
                    </div>
                    <div className="left font12 margin10">
                        <label className="b" style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Ejemplos
                        </label>
                        <div className="contLinea margin10">
                            <div id="linea1" className="contLinea">
                                <div className="contLetra colorVerde">
                                <div className="l1Letra1" style={{color: `${tema ? '#000' : '#fff'}`}}>G</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l1Letra2" style={{color: `${tema ? '#000' : '#fff'}`}}>A</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l1Letra3" style={{color: `${tema ? '#000' : '#fff'}`}}>T</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l1Letra4" style={{color: `${tema ? '#000' : '#fff'}`}}>O</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l1Letra5" style={{color: `${tema ? '#000' : '#fff'}`}}>S</div>
                                </div>
                            </div>
                        </div>
                        <div className="left font10">
                            <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                                La letra <span className="b">G</span> esta en la palabra y en la posición correcta.
                            </label>
                        </div>
                        <div className="contLinea margin10">
                            <div id="linea2" className="contLinea">
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l2Letra1" style={{color: `${tema ? '#000' : '#fff'}`}}>V</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l2Letra2" style={{color: `${tema ? '#000' : '#fff'}`}}>O</div>
                                </div>
                                <div className="contLetra colorAmarillo">
                                <div className="l2Letra3" style={{color: `${tema ? '#000' : '#fff'}`}}>C</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l2Letra4" style={{color: `${tema ? '#000' : '#fff'}`}}>A</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l2Letra5" style={{color: `${tema ? '#000' : '#fff'}`}}>L</div>
                                </div>
                            </div>
                        </div>
                        <div className="left font10 margin10">
                            <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                                La letra <span className="b">C</span> esta en la palabra pero en la posición incorrecta.
                            </label>
                        </div>
                        <div className="contLinea margin10">
                            <div id="linea3" className="contLinea">
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l3Letra1" style={{color: `${tema ? '#000' : '#fff'}`}}>C</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l3Letra2" style={{color: `${tema ? '#000' : '#fff'}`}}>A</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l3Letra3" style={{color: `${tema ? '#000' : '#fff'}`}}>N</div>
                                </div>
                                <div className="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div className="l3Letra4" style={{color: `${tema ? '#000' : '#fff'}`}}>T</div>
                                </div>
                                <div className="contLetra colorGris">
                                <div className="l3Letra5" style={{color: `${tema ? '#000' : '#fff'}`}}>O</div>
                                </div>
                            </div>
                        </div>
                        <div className="left font10 margin10">
                            <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                                La letra <span className="b">O</span> no esta en la palabra.
                            </label>
                        </div>
                    </div>
                    <div className="left font10 marginLeft10 marginTop20">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Puede haber letras repetidas. Las pistas son<br/>
                            independientes para cada letra.
                        </label>
                    </div>
                    <div className="center font10 marginTop20">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            ¡Una palabra nueva cada 5 minutos!
                        </label>
                    </div>
                    <div className="center font10 marginTop20">
                        <button id="btnJugar" onClick={() => mostrarInstrucciones(false)}>¡JUGAR!</button>
                    </div>
                    <div className="center font10 margin10">&nbsp;</div>
                </div>) : (<></>)
            }
        </>
    );
}

export default InstruccionesComponente;