import React from 'react';
import { Heading, Center, VStack, Button, Text} from '@chakra-ui/react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Link, useSearchParams } from 'react-router-dom';

export const GameOver = () => {
  const [searchParams] = useSearchParams()
  return (
    <Center width="100%" height="90vh">
      <FadeIn wrapperTag={VStack} delay="200" transitionDuration="600">
        <Heading>Game Over</Heading>
        <Text>score: {searchParams.get('score')}</Text>
        <Link to="/">
          <Button colorScheme="blue" variant="ghost">return to main menu</Button>
        </Link>
      </FadeIn>
    </Center>
  );
};

export default GameOver;
