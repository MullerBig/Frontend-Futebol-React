import { useEffect, useState, useRef } from "react";
import "./Grupos.css";
import api from "../../services/api";

function Grupos() {
  const [jogador, setJogador] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [futebol, setFutebol] = useState([]);

  const inputNome = useRef();

  async function getSelecionarGrupos() {
    const futebolFromApi = await api.get("api/Grupos/ListarGrupos");
    setGrupos(futebolFromApi.data);
  }

  async function postCriarGrupos() {
    await api.post("api/Grupos/CriarGrupos", {
      Nome: inputNome.current.value,
    });
    limparCampos();
  }

  function limparCampos() {
    inputNome.current.value = "";
}

  useEffect(() => {
    getSelecionarGrupos();
  }, []);

  return (
    <>
      <main className="conteudo">
        <form className="form-futebol">
          <h1>Criar Grupo</h1>
          <p>Crie um Grupo de futebol:</p>

          <label htmlFor="grupo">Grupo</label>
          <input
            name="grupos"
            type="text"
            placeholder="Crie seu time ou grupo de futebol:"
            ref={inputNome}
          />

          <button type="button" className="btn" onClick={postCriarGrupos}>
            Confirmar
          </button>
        </form>
      </main>
    </>
  );
}

export default Grupos;
