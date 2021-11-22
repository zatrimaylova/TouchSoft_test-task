import { useState } from 'react';

import { CounterBg, CounterBody, TextWrapper, ButtonsWrapper, Button } from './styles.js';

const Counter = () => {
  const [count, setCount] = useState(0);

  /* function changeCount checks e.target.tagName, in case e.target.tagName is "button", 
  it's checks e.target.id and uses React useSatate hook to change component's state (count) 
  depending on the ID value */
  const changeCount = (e) => {
    if (e.target.tagName.toLowerCase() !== 'button') return;

    if (e.target.id === "decrease" && count > 0) {
      setCount(count - 1);
    } else if (e.target.id === "increase") {
      setCount(count + 1);
    } else if (e.target.id === "reset") {
      setCount(0);
    }
  }

  return (
    <CounterBg bgColor={count % 2}> 
      <CounterBody>
        <TextWrapper>
          <h1>{count}</h1>
          <h3>{count % 2 ? 'Введено нечётное число' : 'Введено чётное число'}</h3>
        </TextWrapper>
        <ButtonsWrapper onClick={changeCount}>
          <Button id="decrease">-</Button>
          <Button id="reset">Reset</Button>
          <Button id="increase">+</Button>
        </ButtonsWrapper>
      </CounterBody>
    </CounterBg> 
  );
}

export default Counter;