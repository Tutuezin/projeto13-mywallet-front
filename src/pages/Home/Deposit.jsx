import styled from "styled-components";
import { Container, Form, Input, Button } from "../../components/Global";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [disable, setDisable] = useState(false);
  const [loader, setLoader] = useState("Salvar entrada");

  const makeTransaction = (e) => {
    e.preventDefault();
    console.log("oi");
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
