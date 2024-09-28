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
          <RxCross1 size={50} color={'black'} />
        </StyledIconMobile>
        <h2>Chamber of Senses</h2>

        <p>
          Engage your senses through interactive visuals and sensory
          installations that showcase the seamless connection between STEM and
          the arts. Join us on this unforgettable journey, where creativity and
          innovation collide to inspire the next generation of thinkers and
          creators.
        </p>

        <p>
          Hosted at the youth charity{' '}
          <a
            href="https://freeatlast.co.uk/
"
            target="_blank"
          >
            free@last
          </a>{' '}
          in Nechells between 1<sup>st</sup> - 3<sup>rd</sup> Oct 2024, the
          exhibition aims to inspire underprivileged youth to explore exciting
          career opportunities in STEAM (Science, Technology, Engineering, Arts,
          and Mathematics).
        </p>

        <p> Created in collaboration with:</p>
        <p>
          <a href="https://www.westcic.com" target="_blank">
            WEST CIC
          </a>
          ,{' '}
          <a href="https://www.createcentraluk.com/" target="_blank">
            Create Central
          </a>
          , independent artist and curator{' '}
          <a href="https://www.instagram.com/maxqsantander/" target="_blank">
            Dr. Azadeh Sarjoughian
          </a>
          , and sound artist{' '}
          <a href="https://www.instagram.com/maxqsantander/" target="_blank">
            Maximiliano Q. Santander
          </a>
          .
        </p>
      </StyledOverlay>
    </OverlayBackground>
  );
}
