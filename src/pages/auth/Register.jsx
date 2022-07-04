import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/MyWalletLogo.svg";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Container, Form, Input, Button } from "../../components/Global";

import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [loader, setLoader] = useState("Cadastrar");

  const [disable, setDisable] = useState(false);

  const signUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIncorrectPassword(true);
    } else {
      setIncorrectPassword(false);
      const body = {
        name,
        email,
        password,
      };

      const promise = axios.post(
        " https://back-my-wallet-project.herokuapp.com/sign-up",
        body
      );

      promise
        .then((res) => {
          console.log(res.data);
          setDisable(true);
          setLoader(<ThreeDots color="white" />);
          setTimeout(() => navigate("/"), 1000);
        })
        .catch((err) => {
          setLoader(<ThreeDots color="white" />);
          setDisable(true);
          setTimeout(() => setDisable(false), 500);
          setTimeout(() => setLoader("Cadastrar"), 500);

          if (err.response.status) {
            setInvalidEmail(true);
          }
        });
    }
  };

  return (
    <Container>
      <CadastreScreen>
        <img width={147} height={50} src={logo} alt="" />

        <Form onSubmit={signUp}>
          <Input
            disabled={disable}
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {invalidEmail && (
            <p className="invalidForm">
              ⛔ Use um e-mail diferente para continuar!
            </p>
          )}

          <Input
            disabled={disable}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            disabled={disable}
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          {incorrectPassword && (
            <p className="invalidForm">⛔ Senhas não coincidem!</p>
          )}

          <Input
            disabled={disable}
            type="password"
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button type="submit">{loader}</Button>
        </Form>

        <p className="goToLogin" onClick={() => navigate("/")}>
          Já tem uma conta? Entre agora!
        </p>
      </CadastreScreen>
    </Container>
  );
}

const CadastreScreen = styled.div`
  margin-top: 9.5rem;

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .invalidForm {
    cursor: default;
    display: flex;

    font-size: 1.5rem;
    margin-bottom: 0.5rem;
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
