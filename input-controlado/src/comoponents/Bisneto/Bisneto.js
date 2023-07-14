import './style.css';



function Bisneto({ alterarEstado, zerarEstado }) {

    const aoClicar = () => {
        alterarEstado()
    }

    const aoClicar2 = () => {
        zerarEstado()
    }

    return (
        <>
            <div className='ContainerBisneto'>
                <h1>Bisneto</h1>
                <div className='Botoes'>
                    <button onClick={aoClicar} className='EstiloBotao'>Clique aqui para adicionar</button>
                    <button onClick={aoClicar2} className='EstiloBotao'>Clique aqui para diminuir</button>
                </div>
            </div>
        </>
    )
}

export default Bisneto