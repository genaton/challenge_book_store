import "./App.css";
import Header from "./components/Header";
import UltimosLancamentos from "./components/UltimosLancamentos";
import Card from "./components/Card";
import Footer from "./components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';


import styled from "styled-components";


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
  
 
`

function App() {
  return (
    <AppContainer>
      <Header />
      <UltimosLancamentos/>
      <Card/>
      <Footer/>           
    </AppContainer>
  );
}

export default App;
