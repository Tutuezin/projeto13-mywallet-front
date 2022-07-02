import logout from "../../assets/imgs/logout.svg";
import deposit from "../../assets/imgs/deposit.svg";
import withdraw from "../../assets/imgs/withdraw.svg";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Global";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Home() {
  const navigate = useNavigate();

  const [movements, setMovements] = useState([1]);

  // const capitalizedName = name[0].toUpperCase() + name.slice(1);

  return (
    <Container>
      <Header>
        <h2>Olá, Fulano </h2>
        <img width={23} height={24} src={logout} alt="" />
      </Header>

      <Registrations qntMovements={movements}>
        {movements.length === 0 ? (
          <p className="noRegistrations">
            Não há registros de entrada ou saída
          </p>
        ) : (
          <>
            <Transactions>
              <Transaction>
                <h3>
                  <span className="date">30/11</span> comprar um churras
                </h3>
                <LoseMoney>3920.90</LoseMoney>
              </Transaction>

              <Transaction>
                <h3>
                  <span className="date">30/11</span> Salario
                </h3>
                <MakeMoney>5000.00</MakeMoney>
              </Transaction>
            </Transactions>

            <Balance>
              <h2>SALDO</h2>
              <p>3213.22</p>
            </Balance>
          </>
        )}
      </Registrations>

      <Movements>
        <Button onClick={() => navigate("/deposit")}>
          <img width={25} height={25} src={deposit} alt="" />
          <p>
            Nova <br /> entrada
          </p>
        </Button>
        <Button onClick={() => navigate("/withdraw")}>
          <img width={25} height={25} src={withdraw} alt="" />
          <p>
            Nova <br /> saída
          </p>
        </Button>
      </Movements>
    </Container>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 4rem;

  h2 {
    font-size: 2.6rem;
    font-weight: 700;
    color: #fff;
  }

  img {
    cursor: pointer;
  }
`;
const Registrations = styled.div`
  display: flex;
  flex-direction: ${({ qntMovements }) =>
    qntMovements.length === 0 ? "initial" : "column"};
  justify-content: space-between;
  align-items: ${({ qntMovements }) =>
    qntMovements.length !== 0 ? "initial" : "center"};

  background-color: #fff;
  width: 32.6rem;
  height: 44.6rem;
  border-radius: 0.5rem;
  padding: 2.3rem 1.2rem 1rem 1.2rem;

  .noRegistrations {
    padding: 0 5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: #868686;
  }
`;

const Transactions = styled.div`
  width: 100%;
`;

const Transaction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1rem;

  .date {
    color: #c6c6c6;
    margin-right: 0.3rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    color: #000;
  }
`;

const Balance = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    font-size: 1.7rem;
    color: #000;
  }

  p {
    font-weight: 400;
    font-size: 1.7rem;
    color: #03ac00;
  }
`;

const Movements = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  background-color: #a328d6;
  width: 15.5rem;
  height: 11.4rem;
  border-radius: 0.5rem;
  color: #fff;
  padding: 1rem;

  p {
    display: flex;
    text-align: start;

    font-size: 1.7rem;
    font-weight: 700;
  }
`;

const LoseMoney = styled.span`
  color: #c70000;
`;

const MakeMoney = styled.span`
  color: #03ac00;
`;
