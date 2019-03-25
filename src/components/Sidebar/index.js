import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const index = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="">Seu daily mix</a>
        </li>
        <li>
          <a href="">Tocados Recentente</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Álbuns</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Arquivos Locais</a>
        </li>
        <li>
          <a href="">Vídeos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Melhores do Rock</a>
        </li>
      </Nav>
    </div>
    <div />
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="add playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default index;
