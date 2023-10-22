import { FC, useRef, useState } from "react";

// icons
import {
  MdVerified as VerifiedIcon,
  MdVolumeUp as UnMuteIcon,
  MdVolumeOff as MuteIcon,
} from "react-icons/md";

import { AiFillPlayCircle as PlayIcon } from "react-icons/ai";

import { PiHeartBold as HeartIcon } from "react-icons/pi";

interface Props {
  video: {
    id: string;
    title: string;
    path: string;
  };
}

const VideoCard: FC<Props> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const toggleAudio = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.muted = !videoElement.muted;
      setIsMuted(!videoElement.muted);
    }
  };

  const togglePlay = () => {
    console.log("toggle play");

    if (videoRef.current) {
      if (isPlaying) {
        videoRef?.current?.pause();
      } else {
        videoRef?.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 will-change-transform"
      style={{ transform: "none" }}
    >
      <div
        className="relative h-full w-full flex m-auto bg-center bg-cover overflow-hidden rounded-md"
        style={{ borderTop: "1px solid black" }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 select-none"
          onClick={togglePlay}
        >
          <video
            controlsList="nodownload"
            className="h-full w-full object-cover object-center pointer-events-none  rounded-md"
            preload="auto"
            playsInline
            loop
            autoPlay
            muted
            ref={videoRef}
            src={video.path}
          />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 select-none"
          onClick={togglePlay}
        />
        {!isPlaying && (
          <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-sm z-10 flex items-center justify-center text-5xl pointer-events-none">
            <PlayIcon />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-60 z-20 bg-gradient-to-t from-black opacity-30 pointer-events-none select-none" />

        <div className="absolute flex flex-col w-16 bottom-2 z-20 right-0.5 items-center select-none">
          <div className="p-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden border-2 relative mb-1 story-pulsating-brand border-brand">
              <img
                loading="eager"
                src="https://yt3.googleusercontent.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s900-c-k-c0x00ffffff-no-rj"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col w-14">
            <div className="p-3.5 cursor-pointer">
              <HeartIcon className="pb-1 w-full text-2xl " />
              <div className="flex justify-center text-center text-xs select-none">
                2.0K
              </div>
            </div>
            <div className="p-3.5 cursor-pointer">
              <button onClick={toggleAudio} className="w-full">
                {isMuted ? (
                  <UnMuteIcon className="w-full text-2xl" />
                ) : (
                  <MuteIcon className="w-full text-2xl" />
                )}
              </button>
            </div>
            {/* to be filled */}
            <div className="p-3.5 cursor-pointer"></div>
            <div className="p-3.5 cursor-pointer"></div>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 right-20 z-20 pointer-events-none">
          <div className="flex flex-row items-center gap-x-2">
            <div>
              <div className="flex items-center">
                <h1 className="text-bold pointer-events-auto cursor-pointer mt-2">
                  @asdfasfasdfs
                </h1>
                <div className="ml-1 h-3 w-3 text-brand">
                  <VerifiedIcon className="text-blue-500" />
                </div>
              </div>
            </div>
            <div>
              <button className="flex flex-row items-center gap-x-1 h-6 py-0 rounded-md text-sm font-semibold border pointer-events-auto select-none cursor-pointer px-2 transition-colors duration-100 ease-in bg-white bg-opacity-0 hover-hover:hover:bg-opacity-20">
                Follow
              </button>
            </div>
          </div>
          <div
            className="pointer-events-auto pb-2 text-sm overflow-hidden gap-1 flex"
            data-test="content-label"
          >
            <div className="text-ellipsis overflow-hidden flex-grow whitespace-nowrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          {/* <div className="h-0 whitespace-nowrap text-sm invisible pointer-events-none">
                      
                    </div> */}
          <div className="flex flex-row gap-2 flex-wrap">
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                key={index}
                className="flex flex-row items-center gap-x-2 px-2 h-6 rounded-md text-sm font-semibold whitespace-nowrap pointer-events-auto select-none cursor-pointer bg-white bg-opacity-20"
              >
                #tag{index}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
