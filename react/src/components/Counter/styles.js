import styled from 'styled-components';

export const CounterBg = styled.div`
  background-color: ${props => props.bgColor ? 'lightblue' : 'antiquewhite'};
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const CounterBody = styled.div`
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -250px;
  background-color: rgba(0, 0, 0, 30%);
  border-radius: 40px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1, h3 {
    text-align: center;
  };
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  outline: none;
  padding: 20px 30px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;