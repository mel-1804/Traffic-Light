export function Semaforo () {
    return(
        <div className="d-flex flex-column align-items-center">
            <div className="soporte-semaforo border border-dark">
            </div>
            <div className="cuerpo-semaforo rounded-3 border border-dark d-flex flex-column align-items-center">
                <div className="luz-roja rounded-circle"></div>
                <div className="luz-amarilla rounded-circle"></div>
                <div className="luz-verde rounded-circle"></div>
            </div>

        </div>
    )
}