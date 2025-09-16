// import "./App.css";
import BemVindos from "../components/BemVindos";
import Card from "../components/Card";
// import 'bootstrap/dist/css/bootstrap.min.css';

import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Home() {
  return (
    <AppContainer>
      <BemVindos />
      <Card />
     
    </AppContainer>
  );
}

export default Home;
