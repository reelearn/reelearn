"use client";

import { TextPage } from "@/interfaces";
import { FC } from "react";
import AudioPlayer from "./audio-player";

interface Props {
  page: TextPage;
}

const TextCard: FC<Props> = ({ page }) => {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center gap-2"
      style={{
        background: page?.bgColor,
        color: page?.textColor,
      }}
    >
      {page?.title && <h1 className="font-bold text-2xl">{page.title}</h1>}
      <p className="text-lg text-center w-full p-4">{page?.text}</p>
      {page.audioSrc && <AudioPlayer src={page.audioSrc} />}
    </div>
  );
};

export default TextCard;
