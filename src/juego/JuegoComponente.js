import iconoAyudaLight from '../juego/iconoAyudaLight.png'
import iconoAyudaDark from '../juego/iconoAyudaDark.png'
import iconoResultadosDark from '../juego/iconoResultadosDark.png'
import iconoResultadosLight from '../juego/iconoResultadosLight.png'
import iconoBackspaceLight from '../juego/iconoBackspaceLight.png'
import iconoBackspaceDark from '../juego/iconoBackspaceDark.png'
import light from '../juego/light.jpg'
import dark from '../juego/dark.jpg'
import '../juego/JuegoComponente.css';
import React, { useState, useEffect } from 'react';

function JuegoComponente({setMostrarIns, setMostrarEst}) {

    let letras = "";
    let valorLetra = "";
    let linea = 1;

    /* let myArray = ['one', 'two', 'three', 'four', 'five'];
    let rand = Math.random()*myArray.length | 0;
    let rValue = myArray[rand];
    alert(rValue); */

    //let palabraGuardada = localStorage.getItem('palabra');

    const valorTema = localStorage.getItem('tema') === 'light' ? true : false;
    const [tema, setValue] = useState(valorTema);
    
    useEffect(() => {
        const valor = tema ? 'light' : 'dark';
        localStorage.setItem('tema', valor);
    }, [tema]);

    const muestraInstrucciones = () => {
        //localStorage.setItem('mostrarInstrucciones', 'show');
        setMostrarIns(true);
        //alert("Mostrar instrucciones");
    }

    const mostrarResultados = () => {
        setMostrarEst(true);
        //alert("Mostrar resultados");
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
        if(letras.length === 0){
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

    useEffect(() => {
        document.addEventListener("keydown", detectKeyDown, true);
    }, []);

    const detectKeyDown = (e) => {
        //console.log("teclaKeyDown: ", e.key, e.keyCode);
        if((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 192){
            agregarLetra(e.key.toUpperCase());
        }else if(e.keyCode === 8){//Backspace
            borrarLetra();
        }else if(e.keyCode === 13){//Enter
            validarPalabra();
        }
    }

    return (
        <>
        <div id="contFullJuego" style={{backgroundColor: `${tema ? '#e2e3e4' : '#272b3b'}`}}>
            <div id="contJuego">
                
                <div id="contCabecera" className="center margin10 b"
                    style={{ 
                        background: `${tema ? '#DCDCDC' : '#313545'}`
                    }}
                >
                    <div id="iconInstrucciones" align="left" className="alinear alinearIcono" onClick={() => muestraInstrucciones()}>
                        <img src={`${tema ? iconoAyudaLight : iconoAyudaDark}`} alt="Instrucciones" />
                    </div>
                    <div id="tituloJuego" className="alinear">
                        <label style={{color: `${tema ? '#000' : '#fff'}`}}>WORDLE</label>
                    </div>
                    <div id="icons" className="alinear">
                        <div id="contIcons">
                            <div id="iconResultados" className="alinear alinearIcono" onClick={mostrarResultados}>
                                <img src={`${tema ? iconoResultadosLight : iconoResultadosDark}`} alt="Resultados" />
                            </div>
                            <div id="selectTema" className="alinear">
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
                                            background: `${tema ? '#FCDD55' : '#FFFFFF'}`
                                        }}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="contOportunidades">
                    <div className="left font12 margin10">
                        <div className="contLinea margin10">
                            <div id="linea1" className="contLinea">
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra1">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra2">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra3">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra4">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l1Letra5">&nbsp;</div>
                                </div>
                            </div>
                            <div id="linea2" className="contLinea">
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra1">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra2">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra3">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra4">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l2Letra5">&nbsp;</div>
                                </div>
                            </div>
                            <div id="linea3" className="contLinea">
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra1">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra2">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra3">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra4">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l3Letra5">&nbsp;</div>
                                </div>
                            </div>
                            <div id="linea4" className="contLinea">
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra1">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra2">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra3">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra4">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l4Letra5">&nbsp;</div>
                                </div>
                            </div>
                            <div id="linea5" className="contLinea">
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra1">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra2">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra3">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra4">&nbsp;</div>
                                </div>
                                <div className="contLetra" style={{ background: `${tema ? '#CACACA' : 'gray'}`}}>
                                    <div id="l5Letra5">&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="contTeclado" style={{ background: `${tema ? '#e8e9ea' : '#313545'}`}}>
                <div className="left font12 margin10">
                    <div className="contLinea margin10">
                        <div id="linea1Teclado" className="contLinea">
                            <div className="contLetraT cursor" 
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("Q")}
                            >
                                <div className="letraQ" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>Q</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("W")}
                            >
                                <div className="letraW"style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>W</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("E")}
                            >
                                <div className="letraE" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>E</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("R")}
                            >
                                <div className="letraR" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>R</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("T")}
                            >
                                <div className="letraT" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>T</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("Y")}
                            >
                                <div className="letraY" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>Y</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("U")}
                            >
                                <div className="letraU" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>U</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("I")}
                            >
                                <div className="letraI" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>I</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("O")}
                            >
                                <div className="letraO" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>O</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("P")}
                            >
                                <div className="letraP" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>P</div>
                            </div>
                        </div>
                        <div id="linea2Teclado" className="contLinea">
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("A")}
                            >
                                <div className="letraA" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>A</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("S")}
                            >
                                <div className="letraS" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>S</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("D")}
                            >
                                <div className="letraD" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>D</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("F")}
                            >
                                <div className="letraF" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>F</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("G")}
                            >
                                <div className="letraG" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>G</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("H")}
                            >
                                <div className="letraH" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>H</div>
                            </div>
                            <div className="contLetraT cursor" 
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("J")}
                            >
                                <div className="letraJ" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>J</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("K")}
                            >
                                <div className="letraK" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>K</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("L")}
                            >
                                <div className="letraL" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>L</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("Ñ")}
                            >
                                <div className="letraN-" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>Ñ</div>
                            </div>
                        </div>
                        <div id="linea3Teclado" className="contLinea">
                            <div className="contLetraT enter cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => validarPalabra()}
                            >
                                <div className="letraEnter" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>ENTER</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("Z")}
                            >
                                <div className="letraZ" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>Z</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("X")}
                            >
                                <div className="letraX" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>X</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("C")}
                            >
                                <div className="letraC" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>C</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("V")}
                            >
                                <div className="letraV" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>V</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("B")}
                            >
                                <div className="letraB" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>B</div>
                            </div>
                            <div className="contLetraT cursor"
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("N")}
                            >
                                <div className="letraN" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>N</div>
                            </div>
                            <div className="contLetraT cursor" 
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => agregarLetra("M")}
                            >
                                <div className="letraM" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>M</div>
                            </div>
                            <div className="contLetraT cursor conLetraBorrar" 
                                style={{ background: `${tema ? '#d4d6da' : '#585f7c'}`}}
                                onClick={() => borrarLetra()}
                            >
                                {/* <div className="letraBorrar" style={{ color: `${tema ? '#8a8c91' : '#fff'}`}}>{`<-`}</div> */}
                                <div className="letraBorrar" style={
                                    {
                                        color: `${tema ? '#8a8c91' : '#fff'}`,
                                        backgroundImage: `url(${tema ? iconoBackspaceLight : iconoBackspaceDark})`,
                                        backgroundSize: '25px',
                                        backgroundRepeat: 'no-repeat',
                                        marginLeft: '10px',
                                        paddingTop: '20px',
                                        marginTop: '7px'
                                    }
                                }></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  }
  
  export default JuegoComponente;