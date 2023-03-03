
import {useState} from "react";
import Boton from "./componentes/boton.jsx"

function App(){
  let [numero, setNumero] = useState(0)
  let [contadorClick, setContadorClick] = useState(0)
  
  function contadorA(){
    setNumero(numero+1)
  }

  
  function contadorB(){
    setNumero(numero-1)
  }
  
  
  return(
    <>
    <h1>Megacontador2</h1>
    <h2>{numero}</h2>
    <Boton texto="sumar" operador={contadorA}/>
    <Boton texto="restar" operador={contadorB}/>


    
      
    </>
 )

}  


export default App;







