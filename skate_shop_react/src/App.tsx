import "./App.css";
import Header from "./components/Header";
import CampoDeItens from "./components/CampoDeItens";
import { GlobalStyle } from "./styles/global";
import Providers from "./providers";
import FooterComp from "./components/Fotter";
import CartItens from "./components/CartCamp";
import { BodyContent } from "./styles";

function App() {

  return (
    <>
      <Providers>
        <Header/>
          <BodyContent>
            <CampoDeItens/>
            <CartItens/> 
          </BodyContent>
        <FooterComp/>
        <GlobalStyle/>
      </Providers>
    </>
  );
}

export default App;
