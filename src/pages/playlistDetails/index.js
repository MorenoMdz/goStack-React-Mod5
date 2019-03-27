import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

console.tron.log('Hello World');

const Playlist = props => (
  <Container>
    <Header>
      <img
        src="https://images.rapgenius.com/6065a9c533f0519230f451b0da503e5d.1000x1000x1.jpg"
        alt="Playlist Cover"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock playlist</h1>
        <p>13 músicas</p>
        <button>Play</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Titulo</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Thriller</td>
          <td>MJ</td>
          <td>Thriller</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Thriller</td>
          <td>MJ</td>
          <td>Thriller</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Thriller</td>
          <td>MJ</td>
          <td>Thriller</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Thriller</td>
          <td>MJ</td>
          <td>Thriller</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Thriller</td>
          <td>MJ</td>
          <td>Thriller</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Thriller</td>
          <td>MJ</td>
          <td>Thriller</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
