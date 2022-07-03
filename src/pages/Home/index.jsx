import logout from "../../assets/imgs/logout.svg";
import deposit from "../../assets/imgs/deposit.svg";
import withdraw from "../../assets/imgs/withdraw.svg";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Global";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();
  const { name } = useContext(UserContext);
  // const capitalizedName = name[0].toUpperCase() + name.slice(1);

  const [movements, setMovements] = useState([]);
  const [balance, setBalance] = useState(0);

  const { token } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/home", config);
    promise
      .then((res) => {
        setMovements(res.data);
        console.log(movements);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Container>
      <Header>
        <h2>Olá, {name} </h2>
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
              {movements.map((item, index) => {
                // const amount = item.amount;
                // let dinheiroFinal = null;

                // dinheiroFinal += amount;

                return (
                  <>
                    <Transaction>
                      <h3 key={index}>
                        <span className="date">{item.date}</span>{" "}
                        {item.description}
                      </h3>
                      <Type transactionType={item.type}>
                        {Number(item.amount).toFixed(2)}
                      </Type>
                    </Transaction>
                  </>
                );
              })}
            </Transactions>

            <Balance balance={balance}>
              <h2>SALDO</h2>
              <p>{balance.toFixed(2)}</p>
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

//STYLES
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
    color: ${({ balance }) =>
      balance < 0 ? "#c70000" : balance === 0 ? "#868686" : "#03ac00"};
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

const Type = styled.span`
  color: ${({ transactionType }) =>
    transactionType === "deposit" ? "#03ac00" : "#c70000"};
`;
