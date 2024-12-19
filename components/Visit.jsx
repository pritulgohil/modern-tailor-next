"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function VisitUs() {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-red/[0.2] bg-grid-black/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>

      <div
        ref={ref}
        className="flex flex-col justify-center sm:justify-evenly items-center h-screen px-2 md:px-8 gap-10 sm:gap-0"
      >
        <div className="section-header text-black text-4xl sm:text-5xl text-center p-6 sm:p-0">
          <h1>Everything You Need, Under One Roof!</h1>
        </div>
        <div className="w-11/12 md:w-3/5 relative">
          <video
            ref={videoRef}
            width="100%"
            loop
            muted={isMuted}
            preload="auto"
            className="w-full rounded-xl shadow-2xl h-full object-cover md:h-full"
            onClick={handleVideoClick}
          >
            <source src="/videos/modern-display.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button
              onClick={handleVideoClick}
              className="bg-black text-white px-4 py-2 rounded-lg shadow-xl opacity-50"
            >
              {isMuted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitUs;
