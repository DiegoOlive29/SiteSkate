import "./App.css";
import Header from "./components/Header";
import CampoDeItens from "./components/CampoDeItens";
import { GlobalStyle } from "./styles/global";
import Providers from "./providers";
import FooterComp from "./components/Fotter";

function App() {

  return (
    <>
    <Providers>
      <Header/>
      <CampoDeItens/>
      <FooterComp/>
    
      <GlobalStyle/>
    </Providers>
    </>
  );
}

export default App;
