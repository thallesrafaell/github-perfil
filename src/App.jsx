import { useEffect, useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import Repositorios from "./components/RepoList";

function App() {
 // const [formularioVisivel, setFormularioVisivel] = useState(true);
const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
    <input type="text" onBlur={e => setNomeUsuario(e.target.value) } />

      {nomeUsuario.length > 4 && (
        <>
      <Perfil
        nomeUsuario={nomeUsuario}
        avatar="https://github.com/thallesrafaell.png"
      />
      <Repositorios nomeUsuario={nomeUsuario}/>
      </>

      )}

    </>
  );
}

export default App;
