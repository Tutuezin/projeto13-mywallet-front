import styled from "styled-components";
import { Container, Form, Input, Button } from "../../components/Global";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Deposit() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [disable, setDisable] = useState(false);
  const [loader, setLoader] = useState("Salvar entrada");

  const { token } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const makeTransaction = (e) => {
    e.preventDefault();
    const body = {
      amount,
      description,
      type: "deposit",
    };

    const promise = axios.post("http://localhost:5000/deposit", body, config);
    promise
      .then((res) => {
        console.log(res.data);
        setLoader(<ThreeDots color="white" />);
        setDisable(true);
        setTimeout(() => navigate("/home"), 1000);
      })
      .catch((err) => {
        console.log(err.message);
        setLoader(<ThreeDots color="white" />);
        setDisable(true);
        setTimeout(() => setDisable(false), 500);
        setTimeout(() => setLoader("Salvar entrada"), 500);
      });
  };

  return (
    <Container>
      <Header>
        <h2>Nova entrada</h2>
      </Header>
      <Form onSubmit={makeTransaction}>
        <Input
          disabled={disable}
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          disabled={disable}
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">{loader}</Button>
      </Form>
    </Container>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 2.2rem;

  h2 {
    font-size: 2.6rem;
    font-weight: 700;
    color: #fff;
  }
`;
