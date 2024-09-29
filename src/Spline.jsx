import { useEffect, useRef, useState } from 'react';

const SplineViewer = () => {
  const splineRef = useRef(null);
  const [showFallback, setShowFallback] = useState(false);
  const fallbackVideoUrl = '/fallback.mp4'; // Add your fallback video URL here

  useEffect(() => {
    let animationFrameId;
    let lastFrameTime = 0;
    let timeoutId;

    // Dynamically load the Spline viewer script
    const script = document.createElement('script');
    script.src =
      'https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js';
    script.type = 'module';
    document.body.appendChild(script);

    // Set timeout to switch to fallback after 3 seconds
    timeoutId = setTimeout(() => {
      setShowFallback(true);
    }, 3000);

    const isMobile = window.innerWidth <= 768;
    const fps = isMobile ? 30 : 60;
    const frameDuration = 1000 / fps;

    const renderLoop = (timestamp) => {
      const delta = timestamp - lastFrameTime;
      if (delta > frameDuration) {
        lastFrameTime = timestamp;
        // Perform updates here if needed
        if (splineRef.current) {
          // If Spline is loaded, clear the timeout for the fallback
          clearTimeout(timeoutId);
          setShowFallback(false); // Ensure the fallback isn't shown if Spline loads
        }
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(renderLoop);

    // Clean up when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
      document.body.removeChild(script); // Remove the script when the component unmounts
    };
  }, []);

  if (showFallback) {
    return (
      <video
        src={fallbackVideoUrl}
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '100%' }}
      />
    );
  }

  return (
    <spline-viewer
      ref={splineRef}
      url="https://prod.spline.design/ELXnSsvv74uR80gZ/scene.splinecode"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default SplineViewer;
