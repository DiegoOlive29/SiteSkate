import "./App.css";
import Header from "./components/Header";
import CampoDeItens from "./components/CampoDeItens";
import CardItens from "./components/CardItens";
import Itens from "./components/Itens";
import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <div className="App">
     <Header></Header>
      <Itens></Itens>
      <CardItens></CardItens>
    <CampoDeItens></CampoDeItens>
    <GlobalStyle/>
     
    </div>
  );
}

export default App;
