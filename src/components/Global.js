import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  width: 37.5rem;
  padding: 0 2.5rem;
  margin-top: 2.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 32.6rem;
  height: 5.8rem;
  border-radius: 0.5rem;
  margin-bottom: 1.3rem;
  font-size: 1.7rem;
  color: #000000;
  padding-left: 1rem;
  background-color: #fff;
  border: none;

  &::placeholder {
    opacity: 1;
    color: #000000;
    font-size: 2rem;
  }
`;

export const Button = styled.button`
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
`;
