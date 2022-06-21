import React from 'react';

import { VStack, HStack, Heading, Text, Box } from '@chakra-ui/layout';

export const Instructions = () => {
  return (
    <HStack width="100%" height="90vh" paddingTop="10vh" justify="center">
      <VStack width="90%" maxWidth="600px" height="100%">
        <Heading>instructions</Heading>
        <Box paddingTop="10px">
          <Text textAlign="justify">
            In each "round," four numbers will be displayed in four seconds,
            with one number showing every second. The objective is
            straightforward: in add1, you must add 1 to each of the numbers, and
            in add3, you must add 3 to each of the numbers. Calculate your answers in
            modulo base 10—that is, adding 1 to 9 yields 0, adding 3 to 8 yields 1, and so on. 
          </Text>
          <Text paddingTop="5px" textAlign="justify">
            After the numbers display, there will be a second of "rest" time,
            after which you will be able to input your answer. Only one input
            will be allowed every second.
          </Text>
          <Text paddingTop="5px" textAlign="justify">
            In hard mode, the rules are the same, but the interval will be
            shortened to half a second.
          </Text>
        </Box>
      </VStack>
    </HStack>
  );
};

export default Instructions;
