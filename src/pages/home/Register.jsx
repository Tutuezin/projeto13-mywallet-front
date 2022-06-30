import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/MyWalletLogo.svg";

export default function Register() {
  const navigate = useNavigate();

  return (
    <Container>
      <TelaCadastro>
        <img width={147} height={50} src={logo} alt="" />

        <Form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme a senha" />
          {<button type="submit">Cadastrar</button>}
        </Form>

        <p onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</p>
      </TelaCadastro>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TelaCadastro = styled.div`
  margin-top: 9.5rem;

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  p {
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
