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

    const[nuevaLuz, setNuevaLuz] = useState(false)

    return(
        <div className="d-flex flex-column align-items-center">
            <div className="semaforoSup d-flex align-items-center">
                <div className="soporteSemaforo"></div>
                <div className="cuerpoPurpura rounded-end d-flex flex-column align-items-center">
                    <div className={`luzPurpura rounded-circle ${nuevaLuz? "luzEncendida": " "}`}></div>
                    <i class="vaca fa-solid fa-cow"></i>
                </div>
            </div>
            <div className="cuerpoSemaforo rounded-3 d-flex flex-column align-items-center">
                <div onClick={()=> setColor("rojo")} className={`luzRoja rounded-circle ${color=="rojo"? "luzEncendida": " "}`}></div>
                <div onClick={()=> setColor("amarillo")} className={`luzAmarilla rounded-circle ${color=="amarillo"? "luzEncendida": " "}`}></div>
                <div onClick={()=> setColor("verde")} className={`luzVerde rounded-circle ${color=="verde"? "luzEncendida": " "}`}></div>
            </div>
            <button onClick={()=> changeColor("color")} className={`btn btn-secondary`}>Cambio de Luz</button>
            <button onClick={()=> setNuevaLuz(!nuevaLuz)} className="btnPurple btn">Luz Púrpura!!</button>

        </div>
    )
}