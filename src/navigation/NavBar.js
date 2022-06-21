import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation(); 
  return (
    <HStack width="100%" height="5vh">
      <Link to="/">
        <Button
          colorScheme="blue"
          variant="ghost"
          marginLeft="15px"
          paddingLeft="5px"
          paddingRight="5px"
          isDisabled={location.pathname === '/'}
        >
          main menu
        </Button>
      </Link>
      <Link to="/about">
        <Button
          colorScheme="blue"
          variant="ghost"
          padding='5px'
          isDisabled={location.pathname === '/about'}
        >
          about
        </Button>
      </Link>
      <Link to="/instructions">
        <Button colorScheme="blue" variant="ghost" padding="5px" isDisabled={location.pathname === '/instructions'}>
          instructions
        </Button>
      </Link>
    </HStack>
  );
};

export default NavBar;
