"use client";

import { FC, useEffect, useRef, useState } from "react";

// icons
import {
  MdVerified as VerifiedIcon,
  MdVolumeUp as UnMuteIcon,
  MdVolumeOff as MuteIcon,
} from "react-icons/md";

import { AiFillPlayCircle as PlayIcon } from "react-icons/ai";
import { PiHeartBold as HeartIcon } from "react-icons/pi";
import { FaSpinner as SpinnerIcon } from "react-icons/fa";

import { VideoPage } from "@/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { selectAudio, setAudio } from "@/redux/slices/audioSlice";
import { SwiperRef } from "swiper/react";

interface Props {
  page: VideoPage;
  swiper: SwiperRef;
}

const VideoCard: FC<Props> = ({ swiper, page }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audio = useSelector(selectAudio);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);

  const toggleAudio = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.muted = !videoElement.muted;
      dispatch(setAudio(!audio.mute));
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef?.current?.pause();
      } else {
        videoRef?.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsPlaying(entry.isIntersecting);

        const { isIntersecting } = entry;
        if (isIntersecting) {
          videoRef?.current?.play();
          swiper?.swiper?.autoplay?.pause();
        } else {
          videoRef?.current?.pause();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    if (videoRef.current) {
      observer.observe(videoRef?.current);

      videoRef.current.onwaiting = () => {
        setIsLoading(true);
      };

      videoRef.current.oncanplaythrough = () => {
        setIsLoading(false);
      };

      videoRef.current.onended = () => {
        swiper.swiper.slideNext();
      };

      videoRef.current.onloadstart = () => {
        setIsLoading(true);
      };

      videoRef.current.ontimeupdate = () => {
        if (videoRef.current?.currentTime && videoRef.current?.duration)
          setWidth(
            (videoRef.current?.currentTime / videoRef.current?.duration) * 100
          );
      };
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef?.current);
      }
    };
  }, []);

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
            muted={audio?.mute}
            ref={videoRef}
            src={page.src}
          />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 select-none"
          onClick={togglePlay}
        />
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-white z-30 rounded-md transition-all"
          style={{
            width: `${width}%`,
          }}
        />
        {!isPlaying && (
          <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-sm z-10 flex items-center justify-center text-5xl pointer-events-none">
            <PlayIcon />
          </div>
        )}
        {isLoading && (
          <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-sm z-10 flex items-center justify-center text-2xl pointer-events-none">
            <SpinnerIcon className="animate-spin" />
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
                {audio.mute ? (
                  <MuteIcon className="w-full text-2xl" />
                ) : (
                  <UnMuteIcon className="w-full text-2xl" />
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
                  @{page.user.name}
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
              {page.title}
            </div>
          </div>
          <div className="flex flex-row gap-2 flex-wrap">
            {page.tags.map((tag, index) => (
              <button
                key={index}
                className="flex flex-row items-center gap-x-2 px-2 h-6 rounded-md text-sm font-semibold whitespace-nowrap pointer-events-auto select-none cursor-pointer bg-white bg-opacity-20"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
