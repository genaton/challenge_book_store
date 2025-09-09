import "./App.css";
import Header from "./components/Header";
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
      
    </AppContainer>
  );
}

export default App;
