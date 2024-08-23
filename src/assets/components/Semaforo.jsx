import { useState } from "react"

export function Semaforo() {

    const [color, setColor] = useState("verde")

    function changeColor() {
        switch (color) {
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

    const [nuevaLuz, setNuevaLuz] = useState(false)

    return (
        <div>
            <div className="fondo d-flex flex-column align-items-center">
                <div className="semaforoSup d-flex align-items-center">
                    <div className="soporteSemaforo"></div>
                    <div className="cuerpoPurpura rounded-end d-flex flex-column align-items-center">
                        <div className={`luzPurpura rounded-circle ${nuevaLuz ? "luzEncendida" : " "}`}></div>
                        <i class="vaca fa-solid fa-cow"></i>
                    </div>
                </div>
                <div className="cuerpoSemaforo rounded-3 d-flex flex-column align-items-center">
                    <div onClick={() => setColor("rojo")} className={`luzRoja rounded-circle ${color == "rojo" ? "luzEncendida" : " "}`}></div>
                    <div onClick={() => setColor("amarillo")} className={`luzAmarilla rounded-circle ${color == "amarillo" ? "luzEncendida" : " "}`}></div>
                    <div onClick={() => setColor("verde")} className={`luzVerde rounded-circle ${color == "verde" ? "luzEncendida" : " "}`}></div>
                </div>
                <button onClick={() => changeColor("color")} className={`btn btn-secondary`}>Cambio de Luz</button>
                <button onClick={() => setNuevaLuz(!nuevaLuz)} className="btnPurple btn btn-primary">Luz Púrpura!!</button>
            </div>
            <div className="d-flex justify-content-start">
                <img className={`vacaOff ${nuevaLuz ? "vacaOn" : " "}`} src="data:image/jpeg;base64,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"></img>
            </div>
        </div>
    )
}