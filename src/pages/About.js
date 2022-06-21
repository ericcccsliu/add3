import React from 'react';

import { VStack, HStack, Heading, Text, Box } from '@chakra-ui/layout';

export const About = () => {
  return (
    <HStack width="100%" height="90vh" paddingTop="10vh" justify="center">
        <VStack width="90%" maxWidth="500px" height="100%">
          <Heading>about</Heading>
          <Box paddingTop="10px">
            <Text as="span">
              this is an implementation of the add1 and add3 games described by
              Daniel Kahneman in his book,
              <Text as="i">Thinking, Fast and Slow. </Text>{' '}
            </Text>
          </Box>
        </VStack>
    </HStack>
  );
};

export default About;
