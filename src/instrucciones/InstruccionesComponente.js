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
                    <div class="center margin10 b">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Cómo jugar
                        </label>
                    </div>
                    <div class="left font10 margin10">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Adivina la palabra oculta en 5 intentos.
                        </label>
                    </div>
                    <div class="left font10 margin10">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Cada intento debe ser una palabra válida de 5 letras.
                        </label>
                    </div>
                    <div class="left font10 margin10">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Despues de cada intento el color de las letras cambia<br />
                            para mostrar que tan cerca estas de acertar la palabra.
                        </label>
                    </div>
                    <div class="left font12 margin10">
                        <label class="b" style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Ejemplos
                        </label>
                        <div class="contLinea margin10">
                            <div id="linea1" class="contLinea">
                                <div class="contLetra colorVerde">
                                <div class="l1Letra1" style={{color: `${tema ? '#000' : '#fff'}`}}>G</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l1Letra2" style={{color: `${tema ? '#000' : '#fff'}`}}>A</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l1Letra3" style={{color: `${tema ? '#000' : '#fff'}`}}>T</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l1Letra4" style={{color: `${tema ? '#000' : '#fff'}`}}>O</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l1Letra5" style={{color: `${tema ? '#000' : '#fff'}`}}>S</div>
                                </div>
                            </div>
                        </div>
                        <div class="left font10">
                            <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                                La letra <span class="b">G</span> esta en la palabra y en la posición correcta.
                            </label>
                        </div>
                        <div class="contLinea margin10">
                            <div id="linea2" class="contLinea">
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l2Letra1" style={{color: `${tema ? '#000' : '#fff'}`}}>V</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l2Letra2" style={{color: `${tema ? '#000' : '#fff'}`}}>O</div>
                                </div>
                                <div class="contLetra colorAmarillo">
                                <div class="l2Letra3" style={{color: `${tema ? '#000' : '#fff'}`}}>C</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l2Letra4" style={{color: `${tema ? '#000' : '#fff'}`}}>A</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l2Letra5" style={{color: `${tema ? '#000' : '#fff'}`}}>L</div>
                                </div>
                            </div>
                        </div>
                        <div class="left font10 margin10">
                            <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                                La letra <span class="b">C</span> esta en la palabra pero en la posición incorrecta.
                            </label>
                        </div>
                        <div class="contLinea margin10">
                            <div id="linea3" class="contLinea">
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l3Letra1" style={{color: `${tema ? '#000' : '#fff'}`}}>C</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l3Letra2" style={{color: `${tema ? '#000' : '#fff'}`}}>A</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l3Letra3" style={{color: `${tema ? '#000' : '#fff'}`}}>N</div>
                                </div>
                                <div class="contLetra" style={{border: `${tema ? '1px solid #000' : '1px solid gray'}`}}>
                                <div class="l3Letra4" style={{color: `${tema ? '#000' : '#fff'}`}}>T</div>
                                </div>
                                <div class="contLetra colorGris">
                                <div class="l3Letra5" style={{color: `${tema ? '#000' : '#fff'}`}}>O</div>
                                </div>
                            </div>
                        </div>
                        <div class="left font10 margin10">
                            <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                                La letra <span class="b">O</span> no esta en la palabra.
                            </label>
                        </div>
                    </div>
                    <div class="left font10 marginLeft10 marginTop20">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            Puede haber letras repetidas. Las pistas son<br/>
                            independientes para cada letra.
                        </label>
                    </div>
                    <div class="center font10 marginTop20">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>
                            ¡Una palabra nueva cada 5 minutos!
                        </label>
                    </div>
                    <div class="center font10 marginTop20">
                        <button id="btnJugar" onClick={() => mostrarInstrucciones(false)}>¡JUGAR!</button>
                    </div>
                    <div class="center font10 margin10">&nbsp;</div>
                </div>) : (<></>)
            }
        </>
    );
}

export default InstruccionesComponente;