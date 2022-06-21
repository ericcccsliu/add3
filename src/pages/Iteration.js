import React, { useState } from 'react';
import {
  HStack,
  VStack,
  Heading,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Navigate } from 'react-router';

export const Iteration = props => {
  const [result, setResult] = useState([-1, -1, -1, -1]);
  const ans = getAnswer(props.variant, props.number);

  if (props.curr >= 0 && props.curr <= 3) {
    return (
      <VStack>
        <FadeIn>
          <p>remember these numbers...</p>
        </FadeIn>
        <FadeIn key={props.curr}>
          <Heading>{props.number[props.curr]}</Heading>
        </FadeIn>
      </VStack>
    );
  }
  if (props.curr === 4) {
    if (!intArraysEqual(result, [-1, -1, -1, -1])) {
      setResult([-1, -1, -1, -1]);
    }
    return <Heading></Heading>;
  }
  if (props.curr >= 5 && props.curr <= 8) {
    const focus = new Array(4).fill(false);
    const currentBox = props.curr % 5;
    focus[currentBox] = true;
    return (
      <FadeIn>
        <VStack>
          <p>now add {getIncNumber(props.variant)} to each of them</p>
          <HStack>
            {focus.map((focused, index) =>
              focused ? (
                <PinInput
                  size="lg"
                  onComplete={value => {
                    const newResult = result.slice();
                    newResult[index] = value;
                    setResult(newResult);
                  }}
                  focusBorderColor={props.hardMode ? 'red' : 'blue'}
                  key={index}
                >
                  <PinInputField
                    size="lg"
                    type="number"
                    focusBorderColor={props.hardMode ? 'red' : 'blue'}
                    borderColor={props.hardMode ? 'red' : 'blue'}
                    ref={props.focusCallback}
                  />
                </PinInput>
              ) : (
                <PinInput isDisabled size="lg" key={index}>
                  <PinInputField size="lg" type="number" borderColor="black" />
                </PinInput>
              )
            )}
          </HStack>
        </VStack>
      </FadeIn>
    );
  }
  if (props.curr === 9) {
    if (!intArraysEqual(result, ans)) {
      return <Navigate to={"/gameOver/?score=" + (props.score - 1)} replace />;
    }
    return (
      <FadeIn wrapperTag={VStack}>
        <Heading>correct!</Heading>
        <Text alignSelf='center'>score: {props.score}</Text>
      </FadeIn>
    );
  }
};

function intArraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (parseInt(a[i]) !== parseInt(b[i])) return false;
  }
  return true;
}

const getAnswer = (variant, number) => {
  if (variant === 'add1') {
    return number.map(n => (n + 1) % 10);
  }
  if (variant === 'add3') {
    return number.map(n => (n + 3) % 10);
  }
  return null;
};

const getIncNumber = variant => {
  if (variant === 'add1') {
    return 'one';
  }
  if (variant === 'add3') {
    return 'three';
  }
  return null;
};
export default Iteration;
