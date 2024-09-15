import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';

const SplineViewer = () => {
  const splineRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let lastFrameTime = 0;

    const isMobile = window.innerWidth <= 768;
    const fps = isMobile ? 30 : 60;
    const frameDuration = 1000 / fps;

    const renderLoop = (timestamp) => {
      const delta = timestamp - lastFrameTime;
      if (delta > frameDuration) {
        lastFrameTime = timestamp;
        // Perform updates here if needed
        if (splineRef.current) {
          // Access spline-viewer or handle any updates
        }
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(renderLoop);

    // Clean up when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <Spline
      ref={splineRef}
      scene="https://prod.spline.design/ARety-X9YSGW5npQ/scene.splinecode"
    ></Spline>
  );
};
export default SplineViewer;
