import { useEffect, useState, useRef } from "react";
import "./Futebol.css";
import api from "../../services/api";

function Futebol() {
  const [jogador, setJogador] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [futebol, setFutebol] = useState([]);

  const inputData = useRef();
  const inputHorario = useRef();
  const inputQuadra = useRef();
  const inputRua = useRef();
  const inputComplemento = useRef();
  const inputBairro = useRef();
  const inputCidade = useRef();


  async function getSelecionarFutebol() {
    const futebolFromApi = await api.get("api/Futebol/ListarFutebol");
    setFutebol(futebolFromApi.data);
  }

  async function postCriarFutebol() {
    await api.post("api/Futebol/CriarFutebol", {
      data: inputData.current.value,
      horario: inputHorario.current.value,
      quadra: inputQuadra.current.value,
      rua: inputRua.current.value,
      complemento: inputComplemento.current.value,
      bairro: inputBairro.current.value,
      cidade: inputCidade.current.value,
    });
    limparCampos();
  }

  function limparCampos() {
    inputData.current.value = "";
    inputHorario.current.value = "";
    inputQuadra.current.value = "";
    inputRua.current.value = "";
    inputComplemento.current.value = "";
    inputBairro.current.value = "";
    inputCidade.current.value = "";
}

  useEffect(() => {
    getSelecionarFutebol();
  }, []);

  return (
    <>
      <main className="conteudo">
        <form className="form-futebol">
          <h1>Criar Futebol</h1>
          <p>Crie um evento de futebol:</p>

          <label htmlFor="data">Data</label>
          <input
            name="data"
            type="date"
            placeholder="Digite uma data"
            ref={inputData}
          />

          <label htmlFor="horario">Horario</label>
          <input
            name="horario"
            type="time"
            placeholder="Digite o horario:"
            ref={inputHorario}
          />

          <label htmlFor="quadra">Quadra</label>
          <input
            name="quadra"
            type="text"
            placeholder="Digite o nome da quadra do evento:"
            ref={inputQuadra}
          />

          <label htmlFor="rua">rua</label>
          <input
            name="rua"
            type="text"
            placeholder="Digite o nome da rua do evento:"
            ref={inputRua}
          />

          <label htmlFor="complemento">complemento</label>
          <input
            name="complemento"
            type="text"
            placeholder="Digite o complemento do endereço:"
            ref={inputComplemento}
          />

          <label htmlFor="bairro">Bairro</label>
          <input
            name="bairro"
            type="text"
            placeholder="Digite o nome do bairro:"
            ref={inputBairro}
          />

          <label htmlFor="cidade">Cidade</label>
          <input
            name="cidade"
            type="text"
            placeholder="Digite o nome da cidade do evento:"
            ref={inputCidade}
          />

          <button type="button" className="btn" onClick={postCriarFutebol}>
            Confirmar
          </button>
        </form>
      </main>
    </>
  );
}

export default Futebol;
