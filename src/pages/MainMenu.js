import React from 'react';
import { useState } from 'react';

import { VStack, Center, Heading } from '@chakra-ui/layout';
import { Tab, Tabs, TabList } from '@chakra-ui/tabs';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Button } from '@chakra-ui/react';
import {Link } from 'react-router-dom';

export const MainMenu = () => {
  const [variant, setVariant] = useState(0); 
  const [hardMode, setHardMode] = useState(0); 
  const colorScheme = hardMode ? "red" : "blue"; 

  return (
    <Center width="100%" height="85vh">
      <VStack>
        <FadeIn wrapperTag={VStack} delay="200" transitionDuration="600">
          {variant ? (
            <FadeIn>
              <Heading fontSize="60px">add3</Heading>
            </FadeIn>
          ) : (
            <FadeIn>
              <Heading fontSize="60px">add1</Heading>
            </FadeIn>
          )}
          <p>variant</p>
          <Tabs
            defaultIndex={0}
            align="center"
            size="lg"
            variant="soft-rounded"
            colorScheme={colorScheme}
            onChange={index => setVariant(index)}
          >
            <TabList>
              <Tab>add1</Tab>
              <Tab>add3</Tab>
            </TabList>
          </Tabs>
          <p>hard mode</p>
          <Tabs
            defaultIndex={0}
            align="center"
            size="md"
            variant="soft-rounded"
            colorScheme={colorScheme}
            onChange={index => setHardMode(index)}
          >
            <TabList>
              <Tab>off</Tab>
              <Tab>on</Tab>
            </TabList>
          </Tabs>
          <Link
            to={
              '/play/?variant=' + variantMap[variant] + '&hardMode=' + hardMode
            }
          >
            <Button colorScheme={colorScheme} variant="ghost">
              play
            </Button>
          </Link>
        </FadeIn>
      </VStack>
    </Center>
  );
};

const variantMap = {
  0 : 'add1', 
  1 : 'add3', 
}

export default MainMenu;
