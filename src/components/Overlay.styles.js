import styled from '@emotion/styled';

export const OverlayBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 50; /* Background blur, lower than the icon and the modal */
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  z-index: 100; /* Overlay is still above the blur background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 50px;

  @media (max-width: 800px) {
    position: fixed;
    padding: 100px;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    line-height: 1;
    text-transform: uppercase;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 23px;
    font-size: 1.3rem;
  }

  p:nth-child(2) {
    padding-top: 10px;
  }

  p:nth-child(4) {
    padding-top: 30px;
  }

  a {
    color: #5e60ce;
    text-decoration: none;
  }
`;
