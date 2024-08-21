import { useState } from "react"

export function Semaforo () {

    const [color, setColor] = useState("verde")

    function changeColor(){
        switch(color){
            case "rojo":
                setColor("amarillo");
                break;
            case "amarillo":
                setColor("verde");
                break;
            case "verde":
                setColor("rojo");
                break;
                default:
                break;

        }
    }
    return(
        <div className="d-flex flex-column align-items-center">
            <div className="soporte-semaforo border border-dark">
            </div>
            <div className="cuerpo-semaforo rounded-3 border border-dark d-flex flex-column align-items-center">
                <div onClick={()=> setColor("rojo")} className={`luz-roja rounded-circle ${color=="rojo"? "luz_encendida": " "}`}></div>
                <div onClick={()=> setColor("amarillo")} className={`luz-amarilla rounded-circle ${color=="amarillo"? "luz_encendida": " "}`}></div>
                <div onClick={()=> setColor("verde")} className={`luz-verde rounded-circle ${color=="verde"? "luz_encendida": " "}`}></div>
            </div>
            <button onClick={()=> changeColor("color")} className={`btn btn-secondary`}>Cambio de Luz</button>
            <button onClick={()=> purpleColor("color")} className={`btnPurple btn`}>Luz Púrpura!</button>
        </div>
    )
}