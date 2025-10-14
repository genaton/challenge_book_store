import styled from "styled-components";

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  /* color: #05023a; */
  color: ${props => props.cor || '#837cfb'};
  font-size: 28px;
  text-align: center;
  margin: 0;
`;

export default Titulo;

