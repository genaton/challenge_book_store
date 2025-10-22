import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { FaUserCircle, FaSignOutAlt, FaSignInAlt, FaTimes } from "react-icons/fa";

/* ====== estilos ====== */

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 3000;
`;

const Trigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: transparent;
  color: #333;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 8px;
  font-size: 15px;

  &:hover { opacity: 0.85; }
`;

/* anima só a opacidade pra não "pular" posição */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

/* Painel fixo, posição estável (sem medir header) */
const Dropdown = styled.div`
  position: fixed;
  top: 72px;            /* ajuste aqui se quiser mais/menos perto do header */
  right: 16px;          /* encostado à direita, sem centralizar */
  width: 420px;         /* largura confortável */
  max-width: calc(100vw - 32px);
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(8px);
  border: 1px solid #e4e4e4;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  z-index: 5000;
  animation: ${fadeIn} 0.15s ease-out;
  padding: 22px 20px;
`;

const Title = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #333;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 12px 14px;
  outline: none;
  font-size: 15px;
  background: #fff;
  width: 100%;

  &:focus {
    border-color: #837cfb;
    box-shadow: 0 0 0 3px rgba(131,124,251,0.15);
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: #dc3545;
      box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.12);
    `}
`;

const ErrorText = styled.span`
  color: #dc3545;
  font-size: 12px;
  line-height: 1.2;
  margin-top: -2px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center; /* centraliza os botões */
  gap: 10px;
  margin-top: 15px;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  ${({ variant }) =>
    variant === "primary"
      ? css`
          background: linear-gradient(135deg, #837cfb 0%, #6a5acd 100%);
          color: #fff;
          &:hover { opacity: 0.95; }
        `
      : css`
          background: #efefef;
          color: #333;
          &:hover { background: #e7e7e7; }
        `}
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  margin: 16px 0;
`;

const LoggedAs = styled.div`
  font-size: 13px;
  color: #666;
`;

/* ====== componente ====== */

const LS_KEY = "bookmark_auth_user"; // chave do localStorage

export default function LoginMenu() {
  const [open, setOpen] = useState(false);
  const [logged, setLogged] = useState(false);
  const [profile, setProfile] = useState({ name: "", email: "" });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");

  // hidrata do localStorage na montagem
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (data?.email) {
          setProfile({ name: data.name || data.email.split("@")[0], email: data.email });
          setLogged(true);
        }
      }
    } catch { /* ignore */ }
  }, []);

  // sincroniza entre abas (se sair numa aba, sai nas outras)
  useEffect(() => {
    function onStorage(e) {
      if (e.key !== LS_KEY) return;
      const raw = e.newValue;
      if (!raw) {
        // removido = sair
        setLogged(false);
        setProfile({ name: "", email: "" });
      } else {
        try {
          const data = JSON.parse(raw);
          setProfile({ name: data.name || data.email.split("@")[0], email: data.email });
          setLogged(true);
        } catch { /* ignore */ }
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const validateEmail = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).toLowerCase());

  const clearErrors = () => {
    setEmailErr("");
    setPassErr("");
  };

  const handleOpen = () => {
    clearErrors();
    setOpen((v) => !v);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();

    let hasError = false;
    if (!email.trim()) {
      setEmailErr("Informe seu e-mail.");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailErr("E-mail inválido.");
      hasError = true;
    }
    if (!password.trim()) {
      setPassErr("Informe sua senha.");
      hasError = true;
    }
    if (hasError) return;

    const name = email.split("@")[0] || "Usuário";
    const user = { name, email };

    // persiste no localStorage
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(user));
    } catch { /* ignore */ }

    setProfile(user);
    setLogged(true);
    setOpen(false);
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    // apaga do localStorage
    try {
      localStorage.removeItem(LS_KEY);
    } catch { /* ignore */ }

    setLogged(false);
    setProfile({ name: "", email: "" });
    setOpen(false);
  };

  return (
    <Wrapper>
      <Trigger onClick={handleOpen} aria-expanded={open} aria-haspopup="dialog">
        <FaUserCircle size={22} />
        {logged ? (profile.name || profile.email) : "Entrar"}
      </Trigger>

      {open && (
        <Dropdown role="dialog" aria-label="Painel de login">
          {!logged ? (
            <form onSubmit={handleSubmit}>
              <Title>Acessar conta</Title>
              <Field>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  $error={!!emailErr}
                />
                {emailErr && <ErrorText>{emailErr}</ErrorText>}
              </Field>
              <Field>
                <Input
                  type="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  $error={!!passErr}
                />
                {passErr && <ErrorText>{passErr}</ErrorText>}
              </Field>
              <ButtonRow>
                <Button variant="primary" type="submit">
                  <FaSignInAlt /> Entrar
                </Button>
                <Button type="button" onClick={() => setOpen(false)}>
                  <FaTimes /> Fechar
                </Button>
              </ButtonRow>
            </form>
          ) : (
            <>
              <Title>Minha conta</Title>
              <LoggedAs>
                Logado como <b>{profile.name || profile.email}</b>
              </LoggedAs>
              <Divider />
              <ButtonRow>
                <Button onClick={handleLogout}>
                  <FaSignOutAlt /> Sair
                </Button>
              </ButtonRow>
            </>
          )}
        </Dropdown>
      )}
    </Wrapper>
  );
}