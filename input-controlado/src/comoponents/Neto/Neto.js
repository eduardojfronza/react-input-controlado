import Bisneto from "../Bisneto/Bisneto"
import './style.css'

function Neto({ alterarEstado, zerarEstado }) {
    return (
        <>
            <div className="ContainerNeto">
                <h1> Neto</h1>
                <Bisneto alterarEstado={alterarEstado} zerarEstado={zerarEstado}/>
            </div>
        </>
    )
}

export default Neto