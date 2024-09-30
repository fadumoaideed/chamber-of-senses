import React from 'react';
import { OverlayBackground, StyledOverlay } from './Overlay.styles';
import { StyledIcon, StyledIconMobile } from '@/styles/index.styles';
import { RxCross1 } from 'react-icons/rx';

export function Overlay({ isOverlayOpen, setIsOverlayOpen }) {
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <OverlayBackground>
      <StyledOverlay>
        <StyledIconMobile isOverlayOpen={isOverlayOpen} onClick={toggleOverlay}>
          <RxCross1 size={30} color={'black'} />
        </StyledIconMobile>
        <h2>Chamber of Senses</h2>
        <p>
          Dive into an interactive installation that blends STEM and the arts
          with virtual reality. This experience combines technology and play,
          encouraging mindfulness and deeper engagement through sensory
          exploration.
        </p>
        <p>
          We aim to inspire the next generation of thinkers and creators. Hosted
          by the youth charity{' '}
          <a
            href="https://freeatlast.co.uk/
"
            target="_blank"
          >
            free@last
          </a>{' '}
          in Nechells, this project empowers Birmingham youth to explore
          exciting career opportunities in STEAM (Science, Technology,
          Engineering, Arts, and Mathematics).
        </p>
        <p>
          Join us at the Global Growth Congress during Birmingham Tech Week on
          Wednesday, October 23rd, from 9am-4pm at Eastside Rooms, B7 4BL.
        </p>
        <br></br>
        <p> Created in collaboration with:</p>
        <p>
          <a href="https://www.westcic.com" target="_blank">
            WEST CIC
          </a>
          ,{' '}
          <a href="https://www.createcentraluk.com/" target="_blank">
            Create Central
          </a>
          , independent artist and curator Dr. Azadeh Sarjoughian , and sound
          artist{' '}
          <a href="https://www.instagram.com/maxqsantander/" target="_blank">
            Maximiliano Q. Santander
          </a>
          .
        </p>
        <p>
          Funded by the{' '}
          <a href="https://innovationwm.co.uk/wmip/" target="_blank">
            West Midlands Innovation Programme
          </a>
        </p>
      </StyledOverlay>
    </OverlayBackground>
  );
}
