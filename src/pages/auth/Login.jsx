import styled from "styled-components";
import logo from "../../assets/imgs/MyWalletLogo.svg";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState("Entrar");
  const [disable, setDisable] = useState(false);
  const [incorrectAccount, setIncorrectAccount] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    const promise = axios.post("http://localhost:5000/sign-in", body);

    promise
      .then((res) => {
        setToken(res.data.token);
        setDisable(true);
        setLoader(<ThreeDots color="white" />);
        setTimeout(() => navigate("/home"), 1000);
      })
      .catch((err) => {
        console.log(err.response.data);

        setLoader(<ThreeDots color="white" />);
        setDisable(true);
        setTimeout(() => setDisable(false), 500);
        setTimeout(() => setLoader("Entrar"), 500);

        if (err.response.data) {
          setIncorrectAccount(true);
        }
      });
  };

  return (
    <Container>
      <LoginScreen>
        <img width={147} height={50} src={logo} alt="" />

        <Form onSubmit={signIn}>
          {incorrectAccount && (
            <p className="invalidForm">⛔ E-mail ou senha incorretos!</p>
          )}
          <input
            disabled={disable}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            disabled={disable}
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{loader}</button>
        </Form>

        <p onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</p>
      </LoginScreen>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginScreen = styled.div`
  margin-top: 15.8rem;

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: 2.4rem;
  }

  p {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 2.3rem;

    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
  }

  .invalidForm {
    cursor: default;
    display: flex;
    justify-content: flex-start;

    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: #e8b9f2;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 32.6rem;
    height: 5.8rem;
    border-radius: 0.5rem;
    margin-bottom: 1.3rem;
    font-size: 1.5rem;
    color: #000000;
    padding-left: 1rem;
    background-color: #fff;
    border: none;

    &::placeholder {
      color: #000000;
      font-size: 2rem;
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

    svg {
      height: 1rem;
    }
  }
`;
