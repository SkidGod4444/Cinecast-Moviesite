import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function HomeView({ movie }) {
  const videoRefs = useRef([]);

  // Function to play video
  const playVideo = (index) => {
    const videoElement = videoRefs.current[index];
    videoElement.play().catch((error) => {
      console.log('Failed to start video playback:', error);
    });
  };

  // Function to pause video
  const pauseVideo = (index) => {
    const videoElement = videoRefs.current[index];
    videoElement.pause();
    videoElement.currentTime = 0;
  };

  return (
    <div className="grid mt-6 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5">

      <div
        className="border-2 border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
        onMouseEnter={() => {
          playVideo(0);
          videoRefs.current[0].style.opacity = '1'; // Set video opacity to 1 when hovering
        }}
        onMouseLeave={() => {
          pauseVideo(0);
          videoRefs.current[0].style.opacity = '0'; // Set video opacity back to 0 when not hovering
        }}
        style={{
          boxShadow: '0px 26px 30px -10px rgba(0, 0, 0, 0.69), 0px 16px 10px -10px rgba(0, 0, 0, 0.73)',
          position: 'relative' // Add position relative to contain absolute positioned elements
        }}
      >
      
        <Link to={`/movies`} className="w-full">
          <img src="/images/viewer/viewers-disney.png" alt="ok" className="w-full h-40 object-cover " style={{ zIndex: 1,position: 'relative', top: 0 }} />
          <video
            ref={(el) => (videoRefs.current[0] = el)}
            className="w-full h-full right-0 object-cover"
            style={{
              zIndex: 0,
              position: 'absolute',
              top: 0,
              opacity: 0, // Set initial opacity to 0
              transition: 'opacity 500ms ease-in-out' // Add transition for opacity change
            }}
          >
            <source src="/images/viewer/videos/disney-vdo.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>
      <div
  className="border-2 border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
  onMouseEnter={() => {
    playVideo(1);
    videoRefs.current[1].style.opacity = '1'; // Set video opacity to 1 when hovering
  }}
  onMouseLeave={() => {
    pauseVideo(1);
    videoRefs.current[1].style.opacity = '0'; // Set video opacity back to 0 when not hovering
  }}
  style={{
    boxShadow: '0px 26px 30px -10px rgba(0, 0, 0, 0.69), 0px 16px 10px -10px rgba(0, 0, 0, 0.73)',
    position: 'relative' // Add position relative to contain absolute positioned elements
  }}
>
  <Link to={`/movies`} className="w-full">
    <img
      src="/images/viewer/viewers-marvel.png"
      alt="ok"
      className="w-full h-40 object-cover"
      style={{ zIndex: 1, position: 'relative', top: 0 }}
    />
    <video
      ref={(el) => (videoRefs.current[1] = el)}
      className="w-full h-full right-0 object-cover"
      style={{
        zIndex: 0,
        position: 'absolute',
        top: 0,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 500ms ease-in-out' // Add transition for opacity change
      }}
    >
      <source src="/images/viewer/videos/marvel-vdo.mp4" type="video/mp4" />
    </video>
  </Link>
</div>
      <div
  className="border-2 border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
  onMouseEnter={() => {
    playVideo(2);
    videoRefs.current[2].style.opacity = '1'; // Set video opacity to 1 when hovering
  }}
  onMouseLeave={() => {
    pauseVideo(2);
    videoRefs.current[2].style.opacity = '0'; // Set video opacity back to 0 when not hovering
  }}
  style={{
    boxShadow: '0px 26px 30px -10px rgba(0, 0, 0, 0.69), 0px 16px 10px -10px rgba(0, 0, 0, 0.73)',
    position: 'relative' // Add position relative to contain absolute positioned elements
  }}
>
  <Link to={`/movies`} className="w-full">
    <img
      src="/images/viewer/viewers-pixar.png"
      alt="ok"
      className="w-full h-40 object-cover"
      style={{ zIndex: 1, position: 'relative', top: 0 }}
    />
    <video
      ref={(el) => (videoRefs.current[2] = el)}
      className="w-full h-full right-0 object-cover"
      style={{
        zIndex: 0,
        position: 'absolute',
        top: 0,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 500ms ease-in-out' // Add transition for opacity change
      }}
    >
      <source src="/images/viewer/videos/pixar-vdo.mp4" type="video/mp4" />
    </video>
  </Link>
</div>
      
      <div
  className="border-2 border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
  onMouseEnter={() => {
    playVideo(3);
    videoRefs.current[3].style.opacity = '1'; // Set video opacity to 1 when hovering
  }}
  onMouseLeave={() => {
    pauseVideo(3);
    videoRefs.current[3].style.opacity = '0'; // Set video opacity back to 0 when not hovering
  }}
  style={{
    boxShadow: '0px 26px 30px -10px rgba(0, 0, 0, 0.69), 0px 16px 10px -10px rgba(0, 0, 0, 0.73)',
    position: 'relative' // Add position relative to contain absolute positioned elements
  }}
>
  <Link to={`/movies`} className="w-full">
    <img
      src="/images/viewer/viewers-starwars.png"
      alt="ok"
      className="w-full h-40 object-cover"
      style={{ zIndex: 1, position: 'relative', top: 0 }}
    />
    <video
      ref={(el) => (videoRefs.current[3] = el)}
      className="w-full h-full right-0 object-cover"
      style={{
        zIndex: 0,
        position: 'absolute',
        top: 0,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 500ms ease-in-out' // Add transition for opacity change
      }}
    >
      <source src="/images/viewer/videos/starwars-vdo.mp4" type="video/mp4" />
    </video>
  </Link>
</div>


    </div>
  );
}

export default HomeView;
