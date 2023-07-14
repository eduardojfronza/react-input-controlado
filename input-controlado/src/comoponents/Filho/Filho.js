import Neto from "../Neto/Neto";
import './style.css'

function Filho({ alterarEstado, zerarEstado}) {
    return (
        <>
            <div className="ContainerFilho">
                <h1>Filho</h1>
                <Neto alterarEstado={alterarEstado} zerarEstado={zerarEstado}/>
            </div>
        </>
    )
}

export default Filho