"use client";

import { selectAudio, setAudio } from "@/redux/slices/audioSlice";
import { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// icons
import {
  MdVerified as VerifiedIcon,
  MdVolumeUp as UnMuteIcon,
  MdVolumeOff as MuteIcon,
} from "react-icons/md";

import { FaPlay as PlayIcon, FaPause as PauseIcon } from "react-icons/fa6";

interface Props {
  src: string;
}

const AudioPlayer: FC<Props> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audio = useSelector(selectAudio);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(true);
  const [width, setWidth] = useState(0);

  const toggleAudio = () => {
    if (audioRef.current) {
      const videoElement = audioRef.current;
      videoElement.muted = !videoElement.muted;
      dispatch(setAudio(!audio.mute));
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef?.current?.pause();
      } else {
        audioRef?.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsPlaying(entry.isIntersecting);
        entry.isIntersecting
          ? audioRef?.current?.play()
          : audioRef?.current?.pause();
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    if (audioRef.current) {
      observer.observe(audioRef?.current);
      audioRef.current.ontimeupdate = () => {
        if (audioRef.current?.currentTime && audioRef.current?.duration)
          setWidth(
            (audioRef.current?.currentTime / audioRef.current?.duration) * 100
          );
      };
    }
    return () => {
      if (audioRef.current) observer.unobserve(audioRef?.current);
    };
  }, []);

  return (
    <>
      <audio
        controlsList="nodownload"
        className="h-full w-full object-cover object-center pointer-events-none  rounded-md"
        preload="auto"
        playsInline
        autoPlay
        muted={audio?.mute}
        ref={audioRef}
        src={src}
      />
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-blue-500 z-30 rounded-md transition-all"
        style={{
          width: `${width}%`,
        }}
      />
      <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/20 text-white backdrop-blur rounded-md px-3">
        <div className="p-3.5 cursor-pointer">
          <button onClick={toggleAudio} className="w-full">
            {audio.mute ? (
              <MuteIcon className="w-full text-2xl" />
            ) : (
              <UnMuteIcon className="w-full text-2xl" />
            )}
          </button>
        </div>
        <div className="p-3.5 cursor-pointer">
          <button onClick={togglePlay} className="w-full">
            {isPlaying ? (
              <PauseIcon className="w-full" />
            ) : (
              <PlayIcon className="w-full" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
