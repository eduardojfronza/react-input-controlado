import { useState } from "react";
import Filho from "./comoponents/Filho/Filho";
import './App.css'
function App() {
  const [estado, setEstado] = useState(0);

  const alterarEstado = () => {
    setEstado(estado + 1)
    
  }

  const zerarEstado = () =>{
    if(estado > 0){
      setEstado(estado - 1)
    } else {
       alert("Não é possivel deixar o estado negativo!")
    }
  }

  return (
    <>
      <div className="ContainerApp">
        <h1>Estado:{estado}</h1>
        <Filho alterarEstado={alterarEstado} zerarEstado={zerarEstado} />
      </div>
    </>
  );
}

export default App