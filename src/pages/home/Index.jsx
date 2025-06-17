import { useEffect, useState, useRef } from "react";
import "./style.css";
import api from "../../services/api";

function Home() {
  const [jogador, setJogador] = useState([]);

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

  async function postCriarJogador() {
    await api.post("api/Jogador/CriarJogador", {
      nome: inputNome.current.value,
      apelido: inputApelido.current.value,
      posicao: inputPosicao.current.value,
      presenca: inputPresenca.current.checked,
      gruposId: parseInt(inputGrupo.current.value),
      futebolId: parseInt(inputFutebol.current.value)

      
    });
    getSelecionarJogador()

  }

  useEffect(() => {
    getSelecionarJogador();

  }, []);

  return (
    <>
      <header className="conteudo">
        {jogador.map((jogador) => (
          <div className="lista-confirmados" key={jogador.id}>
            <p>
              Nome:<span>{jogador.nome}</span>
            </p>
            <p>
              Apelido:<span>{jogador.apelido}</span>
            </p>
            <p>
              Posição:<span>{jogador.posicao}</span>
            </p>
            <p>
              Presença:<span>{jogador.presenca ? " Presente" : " Ausente"}</span>
            </p>
            <p>
              Grupo:<span>{jogador.grupo}</span>
            </p>
          </div>
        ))}
      </header>

      <main className="conteudo">
        <form className="form-presenca">
          <h1>Confirmar Presença</h1>
          <script>
            <p>Digite suas informações e confirme a presença no futebol</p>
          </script>
          <label for="nome">Nome</label>
          <input
            name="nome"
            type="text"
            placeholder="Digite seu Nome"
            ref={inputNome}
          ></input>

          <label for="apelido">Apelido</label>
          <input
            name="apelido"
            type="text"
            placeholder="Digite seu Apelido:"
            ref={inputApelido}
          ></input>

          <label for="posicao">Posição</label>
          <input
            name="posicao"
            type="text"
            placeholder="Digite sua Posição:"
            ref={inputPosicao}
          ></input>

          <label for="presenca">Presença</label>
          <input name="presença" type="checkbox" ref={inputPresenca}></input>

          <label for="grupo">Grupo</label>
          <input
            name="grupo"
            type="number"
            placeholder="De que grupo você é:"
            ref={inputGrupo}
          ></input>

          <label for="futebol">Futebol</label>
          <input
            name="futebol"
            type="number"
            placeholder="FutId"
            ref={inputFutebol}
          ></input>

          <button type="button" className="btn" onClick={postCriarJogador}>
            Confirmar
          </button>
        </form>
      </main>

      <footer className="conteudo">
        <div className="info-fut">
          <p>Quadra:</p>
          <p>Data:</p>
          <p>Horario:</p>
          <p>Rua:</p>
          <p>Complemento:</p>
          <p>Bairro:</p>
          <p>Cidade:</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
