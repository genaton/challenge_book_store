import { useState, useRef, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';

function Pesquisa({ onSearch, isAberta, onAbertaChange, onAbrir }) {
  const [valor, setValor] = useState("");
  const inputRef = useRef(null);

  // Sincroniza com o estado externo
  useEffect(() => {
    if (isAberta) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setValor("");
      onSearch("");
    }
  }, [isAberta, onSearch]);

  const handleAbrir = (e) => {
    e.preventDefault(); // ✅ IMPEDE O RECARREGAMENTO DA PÁGINA
    e.stopPropagation();
    onAbrir(); // Notifica o Header para fechar o adicionar
    onAbertaChange(true);
  };

  const handleBlur = (e) => {
    if (valor === "" && (!e.relatedTarget || !e.relatedTarget.closest('.pesquisa-container'))) {
      onAbertaChange(false);
    }
    onSearch(valor);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      onAbertaChange(false);
      setValor("");
      onSearch("");
    }
  };

  return (
    <div className="d-flex align-items-center pesquisa-container">
      
      <div className="position-relative">
        
        {/* Container do input */}
        <div
          className="bg-white border rounded-pill d-flex align-items-center"
          style={{
            width: isAberta ? '250px' : '45px',
            height: '45px',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            border: '2px solid #dee2e6 !important',
            cursor: isAberta ? 'auto' : 'pointer'
          }}
          onClick={!isAberta ? handleAbrir : undefined}
        >
          {/* Ícone - COM PREVENT DEFAULT */}
          <FaSearch 
            className="text-muted mx-3"
            size={16}
            style={{ 
              flexShrink: 0,
              cursor: 'pointer'
            }}
            onClick={handleAbrir} // ✅ Já tem preventDefault
          />
          
          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={valor}
            onChange={(e) => {
              setValor(e.target.value);
              onSearch(e.target.value);
            }}
            onBlur={handleBlur}
            onKeyDown={handleKeyPress}
            placeholder="Pesquisar livros..."
            className="border-0 outline-0 w-100"
            style={{
              background: 'transparent',
              outline: 'none',
              fontSize: '14px',
              opacity: isAberta ? 1 : 0,
              transition: 'opacity 0.2s ease 0.1s',
              marginRight: '15px'
            }}
          />
        </div>

      </div>

    </div>
  );
}

export default Pesquisa;