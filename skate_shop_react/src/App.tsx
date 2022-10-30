import "./App.css";
import Header from "./components/Header";
import CampoDeItens from "./components/CampoDeItens";
import CardItens from "./components/CardItens";
import Itens from "./components/Itens";

function App() {
  const itens = { name: "item", price: 2.0 };

  return (
    <div className="App">
     <Header></Header>
      <Itens></Itens>
      <CardItens></CardItens>
    <CampoDeItens></CampoDeItens>
     
    </div>
  );
}

export default App;
