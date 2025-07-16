import { useEffect, useState, useRef } from "react";
import "./confirmar.css";
import api from "../../services/api";

function Confirmar() {
  const [jogador, setJogador] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [futebol, setFutebol] = useState([]);

  const inputNome = useRef();
  const inputApelido = useRef();
  const inputPosicao = useRef();
  const inputPresenca = useRef();
  const inputGrupo = useRef();
  const inputFutebol = useRef();

  async function getSelecionarJogador() {
    const jogadorFromApi = await api.get("api/Jogador/ListarJogadores");
    setJogador(jogadorFromApi.data);
  }

  async function getSelecionarGrupos() {
    const gruposFromApi = await api.get("api/Grupos/ListarGrupos");
    setGrupos(gruposFromApi.data);
  }

  async function getSelecionarFutebol() {
    const futebolFromApi = await api.get("api/Futebol/ListarFutebol");
    setFutebol(futebolFromApi.data);
  }

  async function postCriarJogador() {
    await api.post("/api/Jogador/CriarJogador", {
      Nome: inputNome.current.value,
      Apelido: inputApelido.current.value,
      Posicao: inputPosicao.current.value,
      Presenca: inputPresenca.current.checked,
      GruposId: parseInt(inputGrupo.current.value),
      FutebolId: parseInt(inputFutebol.current.value),
    });
    limparCampos();
  }

  function limparCampos() {
    inputNome.current.value = "";
    inputApelido.current.value = "";
    inputPosicao.current.value = "";
    inputPresenca.current.checked = false;
    inputGrupo.current.value = "";
    inputFutebol.current.value = "";
}

  useEffect(() => {
    getSelecionarJogador();
    getSelecionarGrupos();
    getSelecionarFutebol();
  }, []);

  return (
    <>
      <main className="conteudo">
        <form className="form-presenca">
          <h1>Confirmar Presença</h1>
          <p>Digite suas informações e confirme a presença no futebol</p>

          <label htmlFor="nome">Nome</label>
          <input
            name="nome"
            type="text"
            placeholder="Digite seu Nome"
            ref={inputNome}
          />

          <label htmlFor="apelido">Apelido</label>
          <input
            name="apelido"
            type="text"
            placeholder="Digite seu Apelido:"
            ref={inputApelido}
          />

          <label htmlFor="posicao">Posição</label>
          <input
            name="posicao"
            type="text"
            placeholder="Digite sua Posição:"
            ref={inputPosicao}
          />

          <label htmlFor="presenca">Presença</label>
          <input name="presenca" type="checkbox" ref={inputPresenca} />

          <label htmlFor="grupo">Grupo</label>
          <select name="grupo" ref={inputGrupo}>
            <option value="">Selecione um grupo</option>
            {grupos
              .filter(
                (grupo) =>
                  grupo.gruposId !== undefined && grupo.gruposId !== null
              )
              .map((grupo) => (
                <option key={grupo.gruposId} value={grupo.gruposId}>
                  {grupo.nome}
                </option>
              ))}
          </select>

          <label htmlFor="futebol">Futebol</label>
          <select name="futebol" ref={inputFutebol}>
            <option value="">Selecione um Futebol</option>
            {futebol
              .filter(
                (fut) => fut.futebolId !== undefined && fut.futebolId !== null
              )
              .map((fut) => (
                <option key={fut.futebolId} value={fut.futebolId}>
                  {fut.quadra}
                </option>
              ))}
          </select>

          <button type="button" className="btn" onClick={postCriarJogador}>
            Confirmar
          </button>
        </form>
      </main>
    </>
  );
}

export default Confirmar;
