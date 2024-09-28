import Head from 'next/head';
import { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import SplineViewer from '@/Spline';
import { Overlay } from '@/components/Overlay';
import { Container, StyledIconDesktop } from '@/styles/index.styles';

export default function Home() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };
  return (
    <>
      <Head>
        <title>Chamber of Senses</title>
        <meta
          name="description"
          content="An immersive exhibition blending sound, movement, and technology to inspire youth in STEAM careers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <SplineViewer />

        <StyledIconDesktop
          isOverlayOpen={isOverlayOpen}
          onClick={toggleOverlay}
        >
          <FiHelpCircle color={'white'} size={50} />
        </StyledIconDesktop>

        {isOverlayOpen && (
          <Overlay
            isOverlayOpen={isOverlayOpen}
            setIsOverlayOpen={setIsOverlayOpen}
          />
        )}
      </Container>
    </>
  );
}
