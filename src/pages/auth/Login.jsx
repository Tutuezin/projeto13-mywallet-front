import styled from "styled-components";
import logo from "../../assets/imgs/MyWalletLogo.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <LoginScreen>
        <img width={147} height={50} src={logo} alt="" />

        <Form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
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
  }
`;
