import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/MyWalletLogo.svg";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  return (
    <Container>
      <CadastreScreen>
        <img width={147} height={50} src={logo} alt="" />

        <Form>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {incorrectPassword === false ? (
            <></>
          ) : (
            <p className="incorrectPassword">Senhas não coincidem!</p>
          )}
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {incorrectPassword === false ? (
            <></>
          ) : (
            <p className="incorrectPassword">Senhas não coincidem!</p>
          )}

          <input
            type="password"
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Form>

        <p className="goToLogin" onClick={() => navigate("/")}>
          Já tem uma conta? Entre agora!
        </p>
      </CadastreScreen>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CadastreScreen = styled.div`
  margin-top: 9.5rem;

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .incorrectPassword {
    cursor: default;
    display: flex;

    font-size: 1.5rem;
    font-weight: 700;
    color: #e8b9f2;
  }

  .goToLogin {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;

    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 5.8rem;
    width: 32.6rem;
    border-radius: 0.5rem;
    margin-bottom: 1.3rem;

    padding-left: 1rem;
    background: #ffffff;
    border: none;

    &::placeholder {
      color: #000000;
      font-size: 2rem;
      font-weight: 400;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 4.6rem;
    width: 32.6rem;

    font-size: 2rem;
    font-weight: 700;
    color: #fff;

    border-radius: 0.4rem;
    border: none;
    background-color: #a328d6;
  }
`;
