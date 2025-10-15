import BemVindos from "../components/BemVindos";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Home() {
  return (
    <AppContainer>
      <BemVindos />
    </AppContainer>
  );
}

export default Home;