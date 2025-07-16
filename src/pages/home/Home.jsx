import { useEffect, useState, useRef } from "react";
import api from "../../services/api";
import "./style.css";

function Home() {
  const [grupos, setGrupos] = useState([]);
  const [futebol, setFutebol] = useState([]);

  async function getSelecionarGrupos() {
    const gruposFromApi = await api.get("api/Grupos/ListarGrupos");
    setGrupos(gruposFromApi.data);
  }

  async function getSelecionarFutebol() {
    const futebolFromApi = await api.get("api/Futebol/ListarFutebol");
    setFutebol(futebolFromApi.data);
  }

  useEffect(() => {
    getSelecionarGrupos();
    getSelecionarFutebol();
  }, []);

  return (
    <>
      <header className="introducao">
        <h1>FutCore</h1>
        <p>Projeto que visa facilitar a criação de eventos futebolistos</p>
        <br></br>

        <h2>Sobre o Projeto</h2>
        <p>
          FutCore é um projeto fullstack feito com SQL Server, C# .NetCore8 e
          React.js
        </p>
        <p>
          Neste website é possível criar grupos de futebol, eventos (jogos de
          futebol), e confirmar a presença dos jogadores que foram convidados.
        </p>
        <br></br>
      </header>

      <main className="conteudo">
        <section>
          <h1>Grupos Criados:</h1>
          <p>Segue a lista de grupos cadastrados</p>
          {grupos
            .filter((g) => g.gruposId !== undefined && g.gruposId !== null)
            .map((grupo) => (
              <div className="lista-confirmados" key={grupo.gruposId}>
                <p>
                  Grupo/Time: <span>{grupo.nome}</span>
                </p>
              </div>
            ))}
        </section>

        <article>
          <h1>Eventos de Futebol Criados:</h1>
          <p>Segue a lista de eventos futebolisticos criados</p>
          {futebol
            .filter((f) => f.futebolId !== undefined && f.futebolId !== null)
            .map((futebol) => (
              <div className="lista-confirmados" key={futebol.futebolId}>
                <p>
                  Data: <span>{futebol.data}</span>
                </p>
                <p>
                  Horario: <span>{futebol.horario}</span>
                </p>
                <p>
                  Quadra: <span>{futebol.quadra}</span>
                </p>
                <p>
                  Rua: <span>{futebol.rua}</span>
                </p>
                <p>
                  Complemento: <span>{futebol.complemento}</span>
                </p>
                <p>
                  Bairo: <span>{futebol.bairro}</span>
                </p>
                <p>
                  Cidade: <span>{futebol.cidade}</span>
                </p>
              </div>
            ))}
        </article>
      </main>
    </>
  );
}

export default Home;
