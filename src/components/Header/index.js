import React from 'react';

import { Container, Search, User } from './styles';

const Header = props => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/29472480?v=4" alt="Avatar" />
      Moreno A
    </User>
  </Container>
);

export default Header;
