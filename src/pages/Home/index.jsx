import logout from "../../assets/imgs/logout.svg";
import deposit from "../../assets/imgs/deposit.svg";
import withdraw from "../../assets/imgs/withdraw.svg";

import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Header>
        <h2>Olá, Fulano</h2>
        <img width={23} height={24} src={logout} alt="" />
      </Header>

      <Registrations>
        {/* <p>Não há registros de entrada ou saída</p> */}
      </Registrations>

      <Movements>
        <button className="deposit">
          <img width={25} height={25} src={deposit} alt="" />
          <p>
            Nova <br /> entrada
          </p>
        </button>
        <button className="withdraw">
          <img width={25} height={25} src={withdraw} alt="" />
          <p>
            Nova <br /> saída
          </p>
        </button>
      </Movements>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 2.5rem;
  margin-top: 2.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 2.2rem;

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
  align-items: center;
  background-color: #fff;
  width: 32.6rem;
  height: 44.6rem;
  border-radius: 0.5rem;

  p {
    padding: 0 5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: #868686;
  }
`;

const Movements = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;

  button {
    display: flex;
    flex-direction: column;
    border: none;
    background-color: #a328d6;
    width: 15.5rem;
    height: 11.4rem;
    border-radius: 0.5rem;
    color: #fff;
    padding: 1rem;

    p {
      display: flex;
      align-items: flex-end;
      text-align: start;
      height: 100%;

      font-size: 1.7rem;
      font-weight: 700;
    }
  }
`;
