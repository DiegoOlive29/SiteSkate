import "./App.css";
import Header from "./components/Header";
import CampoDeItens from "./components/CampoDeItens";
import { GlobalStyle } from "./styles/global";
import Providers from "./providers";

function App() {

  return (
    <>
    <Providers>
      <Header></Header>
      <CampoDeItens></CampoDeItens>
      
    
      <GlobalStyle/>
    </Providers>
    </>
  );
}

export default App;
