import styled from "styled-components";
import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const IconeItem = styled.li`
  display: flex;
  align-items: center;
`;

const Icone = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const icones = [
  { src: perfil, alt: "Perfil" },
  { src: sacola, alt: "Sacola" }
];

function IconesHeader() {
  return (
    <IconesContainer>
      {icones.map((icone, index) => (
        <IconeItem key={index}>
          <Icone src={icone.src} alt={icone.alt} />
        </IconeItem>
      ))}
    </IconesContainer>
  );
}

export default IconesHeader;