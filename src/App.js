import '@fontsource/raleway/200.css';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import { theme } from './theme/theme.js';
import MainMenu from './pages/MainMenu';
import Game from './pages/Game.js';
import GameOver from './pages/GameOver.js';
import NavBar from './navigation/NavBar.js';
import About from './pages/About.js';
import Instructions from './pages/Instructions.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><NavBar /><MainMenu /></>} />
          <Route path="/play" element={<Game />} />
          <Route path="/gameOver" element={<GameOver />} />
          <Route path="/about" element={<><NavBar /><About /></>} />
          <Route path="/instructions" element={<><NavBar/><Instructions/></>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
