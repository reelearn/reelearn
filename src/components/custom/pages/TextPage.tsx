"use client";

import { ITextPage } from "@/interfaces";
import { FC } from "react";
import AudioPlayer from "../AudioPlayer";
import { SwiperRef } from "swiper/react";
import { useInView } from "react-intersection-observer";

interface Props {
  page: ITextPage;
  swiper?: SwiperRef;
}

const TextCard: FC<Props> = ({ swiper, page }) => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-full flex flex-col items-center justify-center gap-2"
      style={{
        background: page?.bgColor,
        color: page?.textColor,
      }}
    >
      {page?.title && (
        <h1 className="font-bold w-full text-center text-2xl">{page.title}</h1>
      )}
      <p className="text-lg text-center w-full p-4">{page?.text}</p>
      {page.audioSrc && swiper && inView && (
        <AudioPlayer
          swiper={swiper as SwiperRef}
          src={page.audioSrc}
          inView={inView}
        />
      )}
    </div>
  );
};

export default TextCard;
