import { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaYoutube, 
  FaTiktok,
  FaBook,
  FaUser,
  FaHeadset,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCreditCard,
  FaBookmark,        
  FaGraduationCap,   
  FaAward            
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #ecf0f1;
  padding: 50px 0 20px 0;
  width: 100%;
  border-top: 4px solid #837cfb;
`;

const FooterSection = styled.div`
  margin-bottom: 30px;
`;

const FooterTitle = styled.h6`
  color: #837cfb;
  font-weight: bold;
  margin-bottom: 18px;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FooterLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  padding: 5px 0;

  &:hover {
    color: #837cfb;
    transform: translateX(5px);
    text-decoration: none;
  }
`;

const LogoSection = styled.div`
  text-align: center;
  padding: 30px 0 20px 0;
  border-top: 1px solid #34495e;
  margin-top: 30px;
`;

const LogoIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;

  /* 🔧 largura fixa = centralização perfeita entre os 3 */
  width: 140px;               /* ajuste se quiser mais largo/estreito */
  text-align: center;

  &:hover {
    transform: scale(1.15);
  }
`;
const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #837cfb 0%, #6b63d4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0 5px 15px rgba(131, 124, 251, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.1);
`;

const IconText = styled.span`
  color: #ecf0f1;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  /* 🔧 garante centralização e altura consistente */
  display: block;
  line-height: 1.2;
  min-height: 2.4em;          /* reserva espaço para até 2 linhas */
  white-space: normal;        /* permite quebra */
  word-break: break-word;     /* evita overflow feio */
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 25px 0;
`;

const SocialIcon = styled.a`
  color: #bdc3c7;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  
  &:hover {
    color: #837cfb;
    transform: translateY(-3px);
    background: rgba(131, 124, 251, 0.1);
  }
`;

const Copyright = styled.div`
  color: #95a5a6;
  font-size: 0.85rem;
  margin-top: 20px;
  margin-bottom: 0;
  text-align: center;
`;

const Newsletter = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${props => (props.$error ? "#ff6b6b" : "#34495e")};
  background: #2c3e50;
  color: #ecf0f1;
  border-radius: 5px;
  margin-bottom: 8px; /* menor pra caber feedback logo abaixo */
  font-size: 0.9rem;
  outline: none;

  &::placeholder {
    color: #95a5a6;
  }
  
  &:focus {
    border-color: ${props => (props.$error ? "#ff6b6b" : "#837cfb")};
    box-shadow: 0 0 0 3px rgba(131,124,251,0.15);
  }
`;

const Feedback = styled.div`
  font-size: 0.8rem;
  margin-bottom: 12px;
  color: ${props => (props.$type === "error" ? "#ffb3b3" : "#b8f2c8")};
`;

const NewsletterButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #837cfb;
  color: white;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #6b63d4;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.65;
    transform: none;
    cursor: not-allowed;
  }
`;

const PaymentIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
  font-size: 1.5rem;
`;

function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" }); // type: "error" | "success" | ""
  const [loading, setLoading] = useState(false);

  const validateEmail = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).toLowerCase());

  const handleNewsletter = (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const trimmed = email.trim();

    if (!trimmed) {
      setStatus({ type: "error", message: "Informe seu e-mail para assinar." });
      return;
    }
    if (!validateEmail(trimmed)) {
      setStatus({ type: "error", message: "E-mail inválido. Verifique e tente novamente." });
      return;
    }

    // Simulação de envio (sem backend). Se tiver API, faça a chamada aqui.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus({ type: "success", message: "Inscrição realizada com sucesso! 🎉" });
      setEmail("");
    }, 600);
  };

  return (
    <FooterContainer>
      <Container>
        <Row>
          {/* Categorias de Livros */}
          <Col lg={3} md={6}>
            <FooterSection>
              <FooterTitle>
                <FaBook /> Categorias
              </FooterTitle>
              <FooterLink href="#">
                <FaBook size={14} /> Ficção e Literatura
              </FooterLink>
              <FooterLink href="#">
                <FaBook size={14} /> Ciências Humanas
              </FooterLink>
              <FooterLink href="#">
                <FaBook size={14} /> Infantojuvenis
              </FooterLink>
              <FooterLink href="#">
                <FaBook size={14} /> Técnicos e Acadêmicos
              </FooterLink>
              <FooterLink href="#">
                <FaBook size={14} /> Autoajuda
              </FooterLink>
              <FooterLink href="#">
                <FaBook size={14} /> Best-sellers
              </FooterLink>
            </FooterSection>
          </Col>

          {/* Nossa Livraria */}
          <Col lg={3} md={6}>
            <FooterSection>
              <FooterTitle>
                <FaUser /> Nossa Livraria
              </FooterTitle>
              <FooterLink href="#">Sobre a Bookmark</FooterLink>
              <FooterLink href="#">Nossa História</FooterLink>
              <FooterLink href="#">Trabalhe Conosco</FooterLink>
              <FooterLink href="#">Eventos Literários</FooterLink>
              <FooterLink href="#">Clube do Livro</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterSection>
          </Col>

          {/* Atendimento */}
          <Col lg={3} md={6}>
            <FooterSection>
              <FooterTitle>
                <FaHeadset /> Atendimento
              </FooterTitle>
              <FooterLink href="#">Central de Ajuda</FooterLink>
              <FooterLink href="#">Formas de Pagamento</FooterLink>
              <FooterLink href="#">Entregas e Prazos</FooterLink>
              <FooterLink href="#">Trocas e Devoluções</FooterLink>
              <FooterLink href="#">Dúvidas Frequentes</FooterLink>
              <FooterLink href="#">Fale Conosco</FooterLink>
            </FooterSection>
          </Col>

          {/* Newsletter e Redes Sociais */}
          <Col lg={3} md={6}>
            <FooterSection>
              <FooterTitle>
                <FaEnvelope /> Fique por Dentro
              </FooterTitle>

              <Newsletter as="form" onSubmit={handleNewsletter}>
                <p style={{color: '#bdc3c7', fontSize: '0.9rem', marginBottom: '15px'}}>
                  Receba novidades e promoções
                </p>

                <NewsletterInput
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  $error={status.type === "error"}
                />

                {/* Feedback inline, sem quebrar layout */}
                {status.message && (
                  <Feedback $type={status.type}>
                    {status.message}
                  </Feedback>
                )}

                <NewsletterButton type="submit" disabled={loading}>
                  <FaEnvelope /> {loading ? "Enviando..." : "Assinar Newsletter"}
                </NewsletterButton>
              </Newsletter>

              <SocialIcons>
                <SocialIcon href="#" title="Instagram">
                  <FaInstagram />
                </SocialIcon>
                <SocialIcon href="#" title="Facebook">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon href="#" title="Twitter">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href="#" title="YouTube">
                  <FaYoutube />
                </SocialIcon>
                <SocialIcon href="#" title="TikTok">
                  <FaTiktok />
                </SocialIcon>
              </SocialIcons>
            </FooterSection>
          </Col>
        </Row>

        {/* LOGOS SUBSTITUÍDOS POR ÍCONES */}
        <LogoSection>
          <Row className="justify-content-center align-items-center">
            <Col xs="auto">
              <LogoIcon>
                <IconContainer>
                  <FaBookmark size={30} color="white" />
                </IconContainer>
                <IconText>Bookmark</IconText>
              </LogoIcon>
            </Col>
            
            <Col xs="auto">
              <LogoIcon>
                <IconContainer>
                  <FaGraduationCap size={30} color="white" />
                </IconContainer>
                <IconText>Clube de Leitura</IconText>
              </LogoIcon>
            </Col>
            
            <Col xs="auto">
              <LogoIcon>
                <IconContainer>
                  <FaAward size={30} color="white" />
                </IconContainer>
                <IconText>Qualidade Garantida</IconText>
              </LogoIcon>
            </Col>
          </Row>

          <PaymentIcons>
            <span title="Cartão de Crédito">💳</span>
            <span title="Boleto Bancário">📄</span>
            <span title="PIX">📱</span>
            <span title="Transferência">🏦</span>
          </PaymentIcons>
          
          <Copyright>
            <div style={{marginBottom: '10px'}}>
              <FaMapMarkerAlt style={{marginRight: '8px'}} />
              Rua dos Livros, 123 - Centro, São Paulo - SP
            </div>
            <div style={{marginBottom: '10px'}}>
              <FaPhone style={{marginRight: '8px'}} />
              (11) 3456-7890 • WhatsApp: (11) 98765-4321
            </div>
            <div>
              <FaCreditCard style={{marginRight: '8px'}} />
              CNPJ: 12.345.678/0001-90
            </div>
          </Copyright>
          
          <Copyright style={{marginTop: '20px', borderTop: '1px solid #34495e', paddingTop: '15px'}}>
            © 2025 Bookmark Livraria. Todos os direitos reservados.
          </Copyright>
        </LogoSection>
      </Container>
    </FooterContainer>
  );
}

export default Footer;