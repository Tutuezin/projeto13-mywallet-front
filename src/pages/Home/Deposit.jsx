import styled from "styled-components";
import { Container, Form, Input, Button } from "../../components/Global";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function Deposit() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [disable, setDisable] = useState(false);
  const [loader, setLoader] = useState("Salvar entrada");
  const [maxCharacters, setMaxCharacters] = useState(false);
  const [maxPix, setMaxPix] = useState(false);

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
        setLoader(<ThreeDots color="white" />);
        setDisable(true);
        setTimeout(() => {
          navigate("/home");
          Notify.success("Transação efetuada!");
        }, 1000);
      })
      .catch((err) => {
        console.log(err.message);
        setLoader(<ThreeDots color="white" />);
        setDisable(true);
        setTimeout(() => setDisable(false), 500);
        setTimeout(() => setLoader("Salvar entrada"), 500);

        if (err.message) {
          Notify.failure("Preencha os campos corretamente!");
        }
      });
  };

  return (
    <Container>
      <Header>
        <h2>Nova entrada</h2>
      </Header>

      <Form onSubmit={makeTransaction}>
        {maxPix && <InvalidForm>⛔ O Pix máximo é 10.000!</InvalidForm>}
        <Input
          disabled={disable}
          type="text"
          placeholder="Valor"
          value={amount}
          onChange={(e) => {
            if (Number(e.target.value) || e.target.value === "") {
              setAmount(e.target.value);
            }
            if (e.target.value > 10000) {
              setMaxPix(true);
            } else {
              setMaxPix(false);
            }
          }}
        />

        {maxCharacters && (
          <InvalidForm>⛔ Máximo de caracteres atingido!</InvalidForm>
        )}
        <Input
          disabled={disable}
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => {
            if (e.target.value.length < 20) {
              setDescription(e.target.value);
              setMaxCharacters(false);
            } else {
              setMaxCharacters(true);
            }
          }}
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

const InvalidForm = styled.p`
  cursor: default;
  display: flex;
  justify-content: flex-start;

  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #e8b9f2;
`;
