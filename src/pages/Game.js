import React, { useEffect, useCallback, useState } from 'react';
import { VStack, Center} from '@chakra-ui/layout';

import { Iteration } from './Iteration';
import { useSearchParams } from 'react-router-dom';

export const Game = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams(); 

  const [timer, setTimer] = useState(0);
  const [randomNumber, setRandomNumber] = useState([
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(prev => prev + 1);
    }, searchParams.get("hardMode") === '1' ? 500 : 1000);

    return () => {
      clearInterval(id);
    };
  }, [searchParams]);

  useEffect(() => {
    if(timer % 10 === 0) {
        setRandomNumber([
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ]);
    }
  }, [timer]);

  const numberInput = useCallback(inputElement => {
    if (inputElement) {
      inputElement.focus();
      inputElement.click(); 
    }
  }, []);

  const score = Math.floor(timer/10 + 1)
  const index = timer % 10;
  return (
    <Center width="100%" height="95vh">
      <VStack>
        <Iteration
          curr={index}
          number={randomNumber}
          focusCallback={numberInput}
          variant={searchParams.get('variant')}
          hardMode={parseInt(searchParams.get('hardMode'))}
          score={score}
        />
      </VStack>
    </Center>
  );
};

export default Game;
