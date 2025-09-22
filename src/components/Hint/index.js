import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
`;

const HintContainer = styled.div`
  position: absolute;
  top: -35px;
  left: 0;
  background-color: #fff;
  color: #05023a;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.5em;
  white-space: nowrap;
  animation: ${fadeInOut} 3s ease forwards;
  z-index: 10;
`;

function Hint({ texto }) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    setVisivel(true);
    const timer = setTimeout(() => setVisivel(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return visivel ? <HintContainer>{texto}</HintContainer> : null;
}

export default Hint;