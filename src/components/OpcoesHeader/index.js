import { Link } from "react-router-dom";
import { FaBook } from 'react-icons/fa';

function OpcoesHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link 
        to="/minha-estante" 
        className="btn btn-primary d-flex align-items-center gap-2 fw-bold px-4 py-2"
        style={{
          background: 'linear-gradient(135deg, #837cfb 0%, #6b63d4 100%)',
          border: 'none',
          borderRadius: '25px',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(131, 124, 251, 0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(131, 124, 251, 0.4)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(131, 124, 251, 0.3)';
        }}
      >
        <FaBook />
        MINHA ESTANTE
      </Link>
    </div>
  );
}

export default OpcoesHeader;