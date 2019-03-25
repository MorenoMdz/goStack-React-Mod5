/* eslint-disable react/button-has-type */
import React from 'react';
import Slider from 'rc-slider';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://images.rapgenius.com/6065a9c533f0519230f451b0da503e5d.1000x1000x1.jpg"
        alt="cover"
      />

      <div>
        <span>Thriller</span>
        <small>MJ</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="play" />
        </button>
        <button>
          <img src={PauseIcon} alt="pause" />
        </button>
        <button>
          <img src={RepeatIcon} alt="repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>3:39</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume Icon" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        // value={100}
      />
    </Volume>
  </Container>
);

export default Player;
