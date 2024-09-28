import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const StyledIcon = styled.div`
  svg {
    color: white;
  }
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 110;

  @media (max-width: 800px) {
    top: 80px;
    right: 80px;

    svg {
      color: ${(props) => (props.isOverlayOpen ? 'black' : 'white')};
    }
  }
`;
