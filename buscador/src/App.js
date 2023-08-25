import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..."/>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 64456465</h2>
        <span> Rua: aaaaaaaaaaaaaaa</span>
        <span>Bairo: aaaaaaaa</span>
        <span>Estado: aaaaaaaaaa</span>
        <span>Cidade: aaaaaaaaaaaaa</span>
      </main>

    </div>
  );
}

export default App;

