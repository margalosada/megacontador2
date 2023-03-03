import {useState} from "react"

function Boton({texto, operador}) {
 let [contadorClick, setContadorClick] = useState(0)  
 function click() {
    const novoValor=contadorClick+1
    setContadorClick(novoValor)
    operador()

 }
 
 return (
 <>
 <button onClick={click}>{texto}{contadorClick}</button>
 

 </>
 

 )
 
}


export default Boton

