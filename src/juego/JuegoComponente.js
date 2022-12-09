import iconoAyudaLight from '../juego/iconoAyudaLight.png'
import iconoAyudaDark from '../juego/iconoAyudaDark.png'
import iconoResultadosDark from '../juego/iconoResultadosDark.png'
import iconoResultadosLight from '../juego/iconoResultadosLight.png'
import light from '../juego/light.jpg'
import dark from '../juego/dark.jpg'
import '../juego/JuegoComponente.css';
import React, { useState, useEffect } from 'react';

function JuegoComponente() {

    let letras = "";
    let valorLetra = "";
    let linea = 1;

    /* let myArray = ['one', 'two', 'three', 'four', 'five'];
    let rand = Math.random()*myArray.length | 0;
    let rValue = myArray[rand];
    alert(rValue); */

    let palabraGuardada = localStorage.getItem('palabra');

    const valorTema = localStorage.getItem('tema') == 'light' ? true : false;
    const [tema, setValue] = useState(valorTema);

    useEffect(() => {
        const valor = tema ? 'light' : 'dark';
        localStorage.setItem('tema', valor);
    }, [tema]);

    const mostrarInstrucciones = () => {
        alert("Mostrar instrucciones");
    }

    const mostrarResultados = () => {
        alert("Mostrar resultados");
    }

    const agregarLetra = (letra) => {
        letras += letra;
        valorLetra = letras.split('');
        if(letras.length <= 5){
            document.getElementById('l'+linea+'Letra'+letras.length).innerHTML = valorLetra[letras.length - 1];
        }else if(letras.length > 5){
            borrarLetra();
            alert("Ya se han agregado todas las letras.")
        }
    }

    const borrarLetra = () => {
        if(letras.length == 0){
            alert("No hay letras para borrar.");
        }else if(letras.length <= 5){
            document.getElementById('l'+linea+'Letra'+(letras.length)).innerHTML = ('&nbsp;');
        }
        if(letras.length > 0){
            letras = letras.substring(0, letras.length - 1);
        }
    }

    const validarPalabra = () => {
        let palabra = letras;
        if(palabra.length < 5){
            alert("No se ha completado la palabra.");
        }else{
            linea = linea + 1;
            letras = "";
            alert(palabra);
        }
    }

    return (
        <div id="contFullJuego" style={{backgroundColor: `${tema ? '#e2e3e4' : '#272b3b'}`}}>
            <div id="contJuego">
                
                <div id="contCabecera" class="center font14 margin10 b"
                    style={{ 
                        background: `${tema ? '#DCDCDC' : '#313545'}`
                    }}
                >
                    <div id="iconInstrucciones" align="left" class="alinear alinearIcono" onClick={mostrarInstrucciones}>
                        <img src={`${tema ? iconoAyudaLight : iconoAyudaDark}`} alt="Instrucciones" />
                    </div>
                    <div id="tituloJuego" class="alinear">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>WORDLE</label>
                    </div>
                    <div id="icons" class="alinear">
                        <div id="contIcons">
                            <div id="iconResultados" class="alinear alinearIcono" onClick={mostrarResultados}>
                                <img src={`${tema ? iconoResultadosLight : iconoResultadosDark}`} alt="Resultados" />
                            </div>
                            <div id="selectTema" class="alinear">
                                <input
                                    checked={tema}
                                    onChange={() => setValue(!tema)}
                                    className="react-switch-checkbox"
                                    id={`react-switch-new`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new`}
                                    style={{ 
                                        backgroundImage: `url(${tema ? light : dark})`, 
                                        backgroundSize: `20px`
                                    }}
                                    
                                >
                                    <span 
                                        className={`react-switch-button`}
                                        style={{ 
                                            background: `${tema ? '#FCDD55' : '#fff'}`
                                        }}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="contOportunidades">
                    <div class="left font12 margin10">
                        <div class="contLinea margin10">
                            <div id="linea1" class="contLinea">
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra1">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra2">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra3">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra4">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra5">&nbsp;</div>
                                </div>
                            </div>
                            <div id="linea2" class="contLinea">
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra1">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra2">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra3">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra4">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra5">&nbsp;</div>
                                </div>
                            </div>
                            <div id="linea3" class="contLinea">
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra1">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra2">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra3">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra4">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra5">&nbsp;</div>
                                </div>
                            </div>
                            <div id="linea4" class="contLinea">
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra1">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra2">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra3">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra4">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra5">&nbsp;</div>
                                </div>
                            </div>
                            <div id="linea5" class="contLinea">
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra1">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra2">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra3">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra4">&nbsp;</div>
                                </div>
                                <div class="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra5">&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="contTeclado" style={{ background: `${tema ? '#e8e9ea' : '#313545'}`}}>
                <div class="left font12 margin10">
                    <div class="contLinea margin10">
                        <div id="linea1Teclado" class="contLinea">
                            <div class="contLetraT cursor" 
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("Q")}
                            >
                                <div class="letraQ" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>Q</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("W")}
                            >
                                <div class="letraW"style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>W</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("E")}
                            >
                                <div class="letraE" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>E</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("R")}
                            >
                                <div class="letraR" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>R</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("T")}
                            >
                                <div class="letraT" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>T</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("Y")}
                            >
                                <div class="letraY" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>Y</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("U")}
                            >
                                <div class="letraU" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>U</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("I")}
                            >
                                <div class="letraI" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>I</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("O")}
                            >
                                <div class="letraO" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>O</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("P")}
                            >
                                <div class="letraP" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>P</div>
                            </div>
                        </div>
                        <div id="linea2Teclado" class="contLinea">
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("A")}
                            >
                                <div class="letraA" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>A</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("S")}
                            >
                                <div class="letraS" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>S</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("D")}
                            >
                                <div class="letraD" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>D</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("F")}
                            >
                                <div class="letraF" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>F</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("G")}
                            >
                                <div class="letraG" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>G</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("H")}
                            >
                                <div class="letraH" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>H</div>
                            </div>
                            <div class="contLetraT cursor" 
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("J")}
                            >
                                <div class="letraJ" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>J</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("K")}
                            >
                                <div class="letraK" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>K</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("L")}
                            >
                                <div class="letraL" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>L</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("Ñ")}
                            >
                                <div class="letraN-" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>Ñ</div>
                            </div>
                        </div>
                        <div id="linea3Teclado" class="contLinea">
                            <div class="contLetraT enter cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => validarPalabra()}
                            >
                                <div class="letraEnter" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>ENTER</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("Z")}
                            >
                                <div class="letraZ" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>Z</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("X")}
                            >
                                <div class="letraX" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>X</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("C")}
                            >
                                <div class="letraC" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>C</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("V")}
                            >
                                <div class="letraV" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>V</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("B")}
                            >
                                <div class="letraB" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>B</div>
                            </div>
                            <div class="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("N")}
                            >
                                <div class="letraN" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>N</div>
                            </div>
                            <div class="contLetraT cursor" 
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("M")}
                            >
                                <div class="letraM" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>M</div>
                            </div>
                            <div class="contLetraT cursor" 
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => borrarLetra()}
                            >
                                <div class="letraBorrar" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>{`<-`}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default JuegoComponente;