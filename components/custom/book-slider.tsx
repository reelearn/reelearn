"use client";

import { FC, useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import { Page } from "@/interfaces";

import VideoCard from "./video-card";
import TextCard from "./text-card";
import PosterCard from "./poster-card";

// icons
import { FaPlay as PlayIcon, FaPause as PauseIcon } from "react-icons/fa6";

interface Props {
  currentBook: boolean;
  height: number;
  pages: Page[];
}

const BookSlider: FC<Props> = ({ height, pages }) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [barsWidth, setBarsWidth] = useState<number[]>([]);

  const togglePlay = () => {
    setIsPlaying((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        swiperRef.current?.swiper.autoplay.resume();
      } else {
        swiperRef.current?.swiper.autoplay.pause();
      }
      return nextState;
    });
  };

  useEffect(() => {
    const handleKeyDown = ({ key, keyCode }: KeyboardEvent) => {
      if (key === "ArrowRight") {
        swiperRef.current?.swiper.slideNext();
      } else if (key === "ArrowLeft") {
        swiperRef.current?.swiper.slidePrev();
      } else if (keyCode === 32) {
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Swiper
      className=" w-full"
      style={{
        height: `${height}px`,
      }}
      ref={swiperRef}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay]}
      onSlideChange={(swiper) => {
        setBarsWidth((prevBarsWidth) =>
          prevBarsWidth.map((_, index) =>
            index < swiper.activeIndex ? 100 : 0
          )
        );
        setIsPlaying(true);
      }}
      onAutoplayTimeLeft={(swiper, _, percentage) => {
        setBarsWidth((prevBarsWidth) => {
          const updatedBarsWidth = [...prevBarsWidth]; // Create a copy of the state array
          updatedBarsWidth[swiper.activeIndex] = 100 - percentage * 100; // Reverse the calculation
          return updatedBarsWidth;
        });
      }}
    >
      {pages.map((page, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          {page.type === "POSTER" && <PosterCard page={page} />}
          {page.type === "TEXT" && <TextCard page={page} />}
          {page.type === "VIDEO" && <VideoCard page={page} />}
        </SwiperSlide>
      ))}
      <div className="absolute top-0 left-0 bg-black/20 backdrop-blur w-full flex gap-1 z-50 p-3">
        {swiperRef.current?.swiper.slides.map((_, index) => (
          <div
            key={index}
            className="h-1 w-full relative bg-white/30 rounded-full"
          >
            <div
              className="absolute h-full top-0 left-0 bg-white rounded-full"
              style={{
                width: `${barsWidth[index]}%`,
              }}
            />
          </div>
        ))}
      </div>
      <div className="z-50 absolute bottom-4 right-4">
        <button
          onClick={togglePlay}
          className="h-10 text-xs flex items-center justify-center rounded-full aspect-square bg-black/20 backdrop-blur"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </Swiper>
  );
};

export default BookSlider;
