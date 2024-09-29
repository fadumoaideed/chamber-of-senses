import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const StyledIconDesktop = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 110;

  display: ${(props) => (props.isOverlayOpen ? 'none' : 'block')};
`;

export const StyledIconMobile = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  z-index: 110;

  @media (min-width: 600px) {
    padding: 20px;
    svg {
      height: 40px;
      width: 40px;
    }
  }

  @media (min-width: 800px) {
    padding: 0px;
    svg {
      height: 40px;
      width: 40px;
    }
  }
`;
