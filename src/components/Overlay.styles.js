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
  position: absolute;
  max-width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  z-index: 100; /* Overlay is still above the blur background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  overflow-y: auto;

  h2 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 1.9rem;
    text-transform: uppercase;
    /* background: -webkit-linear-gradient(
      0deg,
      #6a0dad,
      #2f2be2,
      #e22bde,
      #6a0dad
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }

  p {
    font-weight: 300;
    line-height: 30px;
    font-size: 1.3rem;
  }

  a {
    color: #2b83e2;
    text-decoration: none;
  }

  p:last-child {
    color: #203030;
    font-size: 0.8rem;
    padding-bottom: 15px;
  }

  @media (min-width: 600px) {
    padding: 30px;

    h2 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 800px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
    height: fit-content;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 100; /* Overlay is still above the blur background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 50px;

    h2 {
      font-weight: 500;
      font-size: 1.9rem;
      text-transform: uppercase;
    }

    p {
      font-weight: 300;
      line-height: 23px;
      font-size: 1.1rem;
    }
  }
`;
