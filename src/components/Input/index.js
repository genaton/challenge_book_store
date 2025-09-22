import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import styled from "styled-components"
import Hint from "../Hint";

const Container = styled.div`
     display: flex;
  align-items: center;
  position: relative;

`;
const IconButton = styled.button`
  background: none;
  border: none;
  color: #05023a;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
`;


const InputField = styled.input`
    width: ${(props) => (props.expanded ? "250px" : "0")};
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  transition: width 0.3s ease, opacity 0.3s ease;
  background: transparent;
  border: 1px solid #05023a;
  padding: ${(props) => (props.expanded ? "20px 20px" : "0")};
  border-radius: 15px;
  color: #05023a;
  font-size: 16px;
  margin-left: ${(props) => (props.expanded ? "10px" : "0")};
  margin-bottom: 30px;

  &::placeholder {
    color: #05023a;
    font-size: 16px;
  }

`;
function Input({ onBlur }) {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Container>
      <Hint texto="Clique sobre a lupa para pesquisar"/>
      <IconButton onClick={() => setExpanded(!expanded)}>
        <FaSearch />
      </IconButton>
      <InputField
        expanded={expanded}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          onBlur && onBlur(e);
          setExpanded(false);
        }}
        placeholder="Escreva sua próxima leitura"
      />
    </Container>
  );
}

export default Input;