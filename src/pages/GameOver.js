import React from 'react';
import { Heading, Center, VStack, Button, Text, PinInput, PinInputField, HStack} from '@chakra-ui/react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Link, useSearchParams } from 'react-router-dom';

export const GameOver = () => {
  const [searchParams] = useSearchParams()
  const prompt = searchParams.get("prompt").split(','); 
  const input = searchParams.get("input").split(','); 
  const ans = searchParams.get('ans').split(','); 
  return (
    <Center width="100%" height="90vh">
      <FadeIn wrapperTag={VStack} delay="200" transitionDuration="600">
        <Heading>Game Over</Heading>
        <Text fontSize="24px">score: {searchParams.get('score')}</Text>
        <Text>numbers given:</Text>
        <HStack>
          {prompt.map((val, index) => (
            <PinInput
              isDisabled
              size="lg"
              key={index}
              defaultValue={val !== '-1' ? val : null}
            >
              <PinInputField size="lg" type="number" borderColor="black" />
            </PinInput>
          ))}
        </HStack>
        <Text>your input:</Text>
        <HStack>
          {input.map((val, index) => (
            <PinInput
              isDisabled
              placeholder=' '
              size="lg"
              key={index}
              defaultValue={val !== '-1' ? val : null}
            >
              <PinInputField
                size="lg"
                type="number"
                borderColor={val !== ans.at(index) ? 'red' : 'green'}
              />
            </PinInput>
          ))}
        </HStack>
        <Link to="/">
          <Button colorScheme="blue" variant="ghost">
            return to main menu
          </Button>
        </Link>
      </FadeIn>
    </Center>
  );
};

export default GameOver;
