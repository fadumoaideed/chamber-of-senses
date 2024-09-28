import React from 'react';
import { OverlayBackground, StyledOverlay } from './Overlay.styles';

export function Overlay() {
  return (
    <OverlayBackground>
      <StyledOverlay>
        <h2>Chamber of Senses</h2>
        <p>
          Step into the Chamber of Senses and experience Visualising Sound and
          Movement, an immersive exhibition that transforms sound and motion
          into stunning visual experiences.
        </p>
        <p>
          Created in collaboration with WEST CIC, Create Central, independent
          artist and curator Dr. Azadeh Sarjoughian, and sound artist
          Maximiliano Q. Santander, this piece merges art, science, and
          technology to reveal the beauty and power of sound and movement.
        </p>
        <p>
          Hosted at the youth charity free@last in Nechells, the exhibition aims
          to inspire underprivileged youth to explore exciting career
          opportunities in STEAM (Science, Technology, Engineering, Arts, and
          Mathematics).
        </p>
        <p>
          Engage your senses through interactive visuals and sensory
          installations that showcase the seamless connection between STEM and
          the arts. Join us on this unforgettable journey, where creativity and
          innovation collide to inspire the next generation of thinkers and
          creators.
        </p>
      </StyledOverlay>
    </OverlayBackground>
  );
}
