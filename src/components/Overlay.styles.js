import styled from '@emotion/styled';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  /* border-radius: 10px; */
  padding: 20px;
  z-index: 100; /* Overlay is still above the blur background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .h2 {
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: bold;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    line-height: 1;
    text-transform: uppercase;
  }
`;
