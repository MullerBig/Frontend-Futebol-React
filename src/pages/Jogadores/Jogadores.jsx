import { useEffect, useState, useRef } from "react";
import "./Jogadores.css";
import api from "../../services/api";

function Jogadores() {

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

  useEffect(() => {
    getSelecionarJogador();
    getSelecionarGrupos();
    getSelecionarFutebol();
  }, []);


  return (
    <header className="conteudo">
      {jogador
        .filter((j) => j.jogadoresId !== undefined && j.jogadoresId !== null)
        .map((jogador) => {
          const grupoSelecionado = grupos.find(
            (g) => g.gruposId === jogador.gruposId
          );
          const futebolSelecionado = futebol.find(
            (f) => f.futebolId === jogador.futebolId
          );

          return (
            <div className="lista-confirmados" key={jogador.jogadoresId}>
              <p>
                Nome: <span>{jogador.nome}</span>
              </p>
              <p>
                Apelido: <span>{jogador.apelido}</span>
              </p>
              <p>
                Posição: <span>{jogador.posicao}</span>
              </p>
              <p>
                Presença: <span>{jogador.presenca ? "Presente" : "Ausente"}</span>
              </p>
              <p>
                Grupo: <span>{grupoSelecionado?.nome || "N/A"}</span>
              </p>
              <p>
                Futebol: <span>{futebolSelecionado?.quadra || "N/A"}</span>
              </p>
            </div>
          );
      })}
    </header>
  );
}

export default Jogadores;
