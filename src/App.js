import React from 'react';

import Sidebar from './components/Sidebar';
import Player from './components/Player';

import GlobalStyle from './styles/global';
import { Container, Wrapper } from './styles/components';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;