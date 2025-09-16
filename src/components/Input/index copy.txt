import styled from "styled-components";
import { Form } from "react-bootstrap";



const Input = styled(Form.Control)`
  
  width: ${({ expanded }) => (expanded ? "300px" : "0")};
  transition: width 0.4s ease, opacity 0.4s ease;
  overflow: hidden;
  padding: ${({ expanded }) => (expanded ? "0.375rem 0.75rem" : "0")};
  border: ${({ expanded }) => (expanded ? "1px solid #05023a" : "none")};
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  background-color: ${({ expanded }) => (expanded ? "#fff" : "transparent")};
  border-radius: 20px;
  min-width: 0 !important;
    
  &::placeholder {
    color: #837cfb;
    font-size: 20px;
    
  }
  
`;

export default Input;
